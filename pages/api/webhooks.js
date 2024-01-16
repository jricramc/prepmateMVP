// import Stripe from 'stripe';
// import { buffer } from 'micro';
// import Cors from 'micro-cors';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

// // Stripe requires the raw body to construct the event.
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// const cors = Cors({
//   allowMethods: ['POST', 'HEAD'],
// });

// const webhookHandler = async (req, res) => {
//   if (req.method === 'POST') {
//     const buf = await buffer(req);
//     const signature = req.headers['stripe-signature'];

//     let event;
//     try {
//       event = stripe.webhooks.constructEvent(
//         buf.toString(),
//         signature,
//         webhookSecret
//       );
//     } catch (err) {
//       // On error, log and return the error message.
//       console.log(`❌ Error message: ${err.message}`);
//       res.status(400).send(`Webhook Error: ${err.message}`);
//       return;
//     }

//     // Successfully constructed event.
//     console.log('✅ Success:', event.id);

//     switch (event.type) {
//       case 'payment_intent.succeeded': {
//         const paymentIntent = event.data.object;
//         console.log(`PaymentIntent status: ${paymentIntent.status}`);
//         break;
//       }
//       case 'payment_intent.payment_failed': {
//         const paymentIntent = event.data.object;
//         console.log(
//           `❌ Payment failed: ${paymentIntent.last_payment_error?.message}`
//         );
//         break;
//       }
//       case 'charge.succeeded': {
//         const charge = event.data.object;
//         console.log(`Charge id: ${charge.id}`);
//         break;
//       }
//       default: {
//         console.warn(`Unhandled event type: ${event.type}`);
//         break;
//       }
//     }

//     // Return a response to acknowledge receipt of the event.
//     res.json({ received: true });
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end('Method Not Allowed');
//   }
// };

// export default cors(webhookHandler);

// pages/api/stripe-webhook.js

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    // Perform your logic here. For example, you could update your database, send an email to the user, etc.

    const data = JSON.parse(session.metadata.dataa);
    const checkoutData = JSON.parse(session.metadata.cartItem);

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
  }

  // Return a response to acknowledge receipt of the event
  res.json({received: true});
}