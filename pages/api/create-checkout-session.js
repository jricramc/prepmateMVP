// pages/api/create-checkout-session.js

import Stripe from 'stripe';

const stripe_sec= process.env.STRIPE_SECRET_KEY
console.log('here', typeof stripe_sec)

console.log('stripeapi', stripe_sec);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export default async function handler(req, res) {
  // Your logic to create a Stripe Checkout session
  
  const { finalPrice } = req.body;
  console.log('final price', finalPrice)

  if (typeof finalPrice !== 'number') {
    return res.status(400).json({ error: 'Invalid price provided' });
  }

  // Check if finalPrice is less than 55
  if (finalPrice < 44) {
    return res.status(400).json({ error: 'Minimum purchase amount is $44' });
  }

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
  });

  res.status(200).json({ sessionId: session.id });
}