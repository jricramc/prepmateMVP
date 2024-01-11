// pages/api/create-checkout-session.js

import Stripe from 'stripe';

const stripe_sec= process.env.STRIPE_SECRET_KEY


console.log('stripeapi', stripe_sec);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export default async function handler(req, res) {
  // Your logic to create a Stripe Checkout session
  
  const { finalPrice } = req.body;
  console.log('final price', finalPrice)

  if (typeof finalPrice !== 'number') {
    return res.status(400).json({ error: 'Invalid price provided' });
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
        unit_amount: finalPrice*100, // Price in cents
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.origin}/cancel`,
  });

  res.status(200).json({ sessionId: session.id });
}
