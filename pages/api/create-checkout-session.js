// pages/api/create-checkout-session.js

import Stripe from 'stripe';
import { MongoClient } from 'mongodb';

const stripe_sec= process.env.STRIPE_SECRET_KEY
console.log('here', typeof stripe_sec)

console.log('stripeapi', stripe_sec);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export default async function handler(req, res) {
  // Your logic to create a Stripe Checkout session
  const dataa= req.body.data_send.data
  const cartItem= req.body.data_send.cartItems
//   console.log('body',req.body.data_send)
//   console.log('data', req.body.data_send.data)
//   console.log('cartItm', req.body.data_send.cartItems)

  
  const { finalPrice, data } = req.body;
  
//   const id = uuidv4();

  const uri = process.env.DATABASE_URL;
  const client = new MongoClient(uri);
  await client.connect();
  const database = client.db('pm8');
  const collection = database.collection('checkout_sessions');

  const result = await collection.insertOne({ dataa, cartItem });

  const id = result.insertedId.toString();
  console.log('id', id)

  await client.close();


  if (typeof finalPrice !== 'number') {
    return res.status(400).json({ error: 'Invalid price provided' });
  }

  // Check if finalPrice is less than 55
  if (finalPrice < 0.01) {
    return res.status(400).json({ error: 'Minimum purchase amount is $44' });
  }
//   const dataId = await saveData({dataa , cartItem});

  // Example: Create a session with a single line item
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      // Define your product and pricing here
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Sample Product',
        },
        unit_amount: Math.round(finalPrice*100), // Price in cents
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: `${req.headers.origin}/success`,
    cancel_url: `${req.headers.origin}/`,

    metadata: {
        databaseId: id,
      },
  });

  res.status(200).json({ sessionId: session.id });
}