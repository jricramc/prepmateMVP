// pages/api/paymentSuccess.js

import Stripe from 'stripe';
import { MongoClient } from 'mongodb';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { session_id } = req.query;
  
  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);

    // Parse the data from the metadata
    console.log('meta', session.metadata)
    const data = JSON.parse(session.metadata.dataa); // Corrected line
    const checkoutData = JSON.parse(session.metadata.cartItem) // Assuming cartItems is a property of metadata

    const uri = process.env.DATABASE_URL;
    const client = new MongoClient(uri);
    await client.connect();
    const database = client.db('pm8');
    const collection = database.collection('confirmed_addresses');
    const collection2 = database.collection('confirmed_orders');

    await collection.insertOne(data);

    // Add buyer's name to each item
    const buyerName = data['email-address'];
    checkoutData.forEach(item => {
      item.buyerName = buyerName;
    });

    await collection2.insertMany(checkoutData);

    // Close the MongoDB connection
    await client.close();

    res.status(200).json({ message: 'Document inserted' });
  } catch (error) {
    console.error('Error in API Route:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
    return;
  }
}