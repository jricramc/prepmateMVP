// // pages/api/submitCheckout.js
// import { MongoClient } from 'mongodb';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       // Connect to the MongoDB database
//       const uri = process.env.DATABASE_URL;
//       const client = new MongoClient(uri);
//       await client.connect();
//       const database = client.db('pm8');
//       const collection = database.collection('launch1');
//       const collection2 = database.collection('orders');

//       // Insert the document
//       // console.log(req.body);
//       await collection.insertOne(req.body.data);
//       const checkoutData = req.body.cartItems;
//       await collection2.insertMany(checkoutData);

//       // Close the MongoDB connection
//       await client.close();

//       res.status(200).json({ message: 'Document inserted' });
//     } catch (error) {
//         console.error('Error in API Route:', error);
//         res.status(500).json({ message: 'Internal Server Error', error: error.message });
//         return;
//       }
//     } else {
//       res.status(405).json({ message: 'Method not allowed' });
//     }
// }
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
      const collection = database.collection('launch2');
      const collection2 = database.collection('orders2');

      // Insert the document
      await collection.insertOne(req.body.data);
      const checkoutData = req.body.cartItems;

      // Add buyer's name to each item
      const buyerName = req.body.data['email-address'];
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
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
}