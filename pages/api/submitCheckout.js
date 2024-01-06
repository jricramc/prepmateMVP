// pages/api/submitCheckout.js
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Connect to the MongoDB database
      const uri = process.env.DATABASE_URL;
      const client = new MongoClient(uri);
      await client.connect();
      const database = client.db('pm8');
      const collection = database.collection('collection1');

      // Insert the document
      await collection.insertOne(req.body);

      // Close the MongoDB connection
      await client.close();

      res.status(200).json({ message: 'Document inserted' });
    } catch (error) {
        console.error('Error in API Route:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
        return;
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
}
