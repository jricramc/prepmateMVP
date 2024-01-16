// pages/api/stripe-webhook.js

import Stripe from 'stripe';
import { MongoClient } from 'mongodb';
import { buffer } from 'micro'; // You need to install the 'micro' package


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = {
    api: {
      bodyParser: false,
    },
  };

export default async function handler(req, res) {
  const buf = await buffer(req);

  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(buf.toString(), sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    // Retrieve the identifier from the metadata
    const id = session.metadata.databaseId;

    // Connect to your database
    const uri = process.env.DATABASE_URL;
    const client = new MongoClient(uri);
    await client.connect();
    const database = client.db('pm8');
    const collection = database.collection('checkout_sessions');

    // Retrieve the additional data from your database
    const { dataa, cartItem } = await collection.findOne({ _id: new ObjectId(id) });

    // Your logic to handle the additional data

    // const checkoutData = JSON.parse(session.metadata.cartItem) // Assuming cartItems is a property of metadata

    const collection2 = database.collection('confirmed_addresses');
    const collection3 = database.collection('confirmed_orders');

    await collection2.insertOne(dataa);

    // Add buyer's name to each item
    const buyerName = dataa['email-address'];
    cartItem.forEach(item => {
      item.buyerName = buyerName;
    });

    await collection3.insertMany(cartItem);

    // Close the MongoDB connection
    await client.close();
  }

  // Return a response to acknowledge receipt of the event
  res.json({received: true});
}