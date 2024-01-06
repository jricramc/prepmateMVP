// import { FarzaaContext } from '@/context/FarzaaContext'
// import Link from 'next/link'
// import React, { useContext } from 'react'
// import { Form } from 'react-bootstrap'

// const CheckoutSection = () => {
//     const {subTotal, shipping, finalPrice} = useContext(FarzaaContext)
//   return (
//     <div className="container">
//         <div className="fz-checkout">
//             <form action="#" className="checkout-form">
//                 <div className="fz-billing-details">
//                     <div className="row gy-0 gx-3 gx-md-4">
//                         <h3 className="fz-checkout-title">Delivery Details</h3>
//                         <div className="col-6 col-xxs-12">
//                             <input type="text" name="first-name" id="checkout-first-name" placeholder="First Name"/>
//                         </div>
//                         <div className="col-6 col-xxs-12">
//                             <input type="text" name="last-name" id="checkout-last-name" placeholder="Last Name"/>
//                         </div>

//                         <div className="col-12">
//                             <input type="text" name="address-line-one" id="checkout-address-line-one" placeholder="Address Line 1"/>
//                         </div>

//                         <div className="col-12">
//                             <input type="text" name="apartment-name" id="checkout-apartment-name" placeholder="Apartment, Suite, Unit, etc. (optional)"/>
//                         </div>

//                         <div className="col-12">
//                             <input type="text" name="city-name" id="checkout-city-name" placeholder="Town / City"/>
//                         </div>

//                         <div className="col-6 col-xxs-12">
//                             <Form.Select className='state-select' name="states" id="checkout-states">
//                                 <option value="Massachusetts">Massachusetts</option>
//                             </Form.Select>
//                         </div>

//                         <div className="col-6 col-xxs-12">
//                             <input type="text" name="zip-code" id="checkout-zip-code" placeholder="Zip Code"/>
//                         </div>

//                         <div className="col-6 col-xxs-12">
//                             <input type="number" name="phone-number" id="checkout-phone-number" placeholder="Phone Number"/>
//                         </div>

//                         <div className="col-6 col-xxs-12">
//                             <input type="email" name="email-address" id="checkout-email-address" placeholder="Email Address"/>
//                         </div>

//                         <div className="col-12 additional-info">
//                             <label htmlFor="checkout-additional-info" className="fz-checkout-title">Additional Information</label>
//                             <textarea name="additional-info" id="checkout-additional-info" placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="fz-checkout-sidebar">
//                     <div className="billing-summery">
//                         <h4 className="fz-checkout-title">Billing Summary</h4>
//                         <div className="cart-checkout-area">
//                             <ul className="checkout-summary">
//                                 <li>
//                                     <span className="checkout-summary__key">Subtotal</span>
//                                     <span className="checkout-summary__value"><span>$</span>{subTotal}</span>
//                                 </li>

//                                 <li>
//                                     <span className="checkout-summary__key">Shipping</span>
//                                     <span className="checkout-summary__value"><span>$</span>{shipping}</span>
//                                 </li>

//                                 <li className="cart-checkout-total">
//                                     <span className="checkout-summary__key">Total</span>
//                                     <span className="checkout-summary__value"><span>$</span>{finalPrice}</span>
//                                 </li>
//                             </ul>


//                             <Link href="/cart" className="fz-1-banner-btn cart-checkout-btn">Edit Order</Link>
//                         </div>
//                     </div>

//                     <div className="delivery-day">
//                         <h4 className="fz-checkout-title">Delivery Day</h4>
//                         <div className="col-6 col-xxs-12">
//                             <Form.Select className='day-select' name="days" id="checkout-days">
//                                 <option value="Wednesday">Wednesday</option>
//                                 <option value="Sunday">Sunday</option>
//                             </Form.Select>
//                         </div>
//                     </div>

//                     <div className="payment-info">
//                         <h4 className="fz-checkout-title">Payment</h4>
//                         <p className="checkout-payment-descr">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#">privacy policy</a></p>
//                         <button type="submit" className="fz-1-banner-btn cart-checkout-btn checkout-form-btn">Pay</button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default CheckoutSection

// CheckoutSection.js
import React, { useContext, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm'; // Adjust the path as necessary
import { loadStripe } from '@stripe/stripe-js';

import Link from 'next/link';
import { FarzaaContext } from '@/context/FarzaaContext';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);


const CheckoutSection = () => {
    const {subTotal, shipping, finalPrice} = useContext(FarzaaContext);
    console.log('farz final', finalPrice)
    console.log('farzacont', FarzaaContext)

    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Fetch client secret for payment intent
        fetch('/api/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ finalPrice }), // Modify as necessary
        })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const appearance = { theme: 'stripe' };
    const options = { clientSecret, appearance };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            let response = await fetch('/api/submitCheckout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
    
            if (!response.ok) throw new Error('Problem with submitCheckout');
    
            // Handle response here (e.g., extract data if needed)
            const submitResult = await response.json();
            console.log(submitResult.message);
    
            // Step 3: Create Stripe Checkout Session
            response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ finalPrice }), // Modify as necessary
                // Pass any necessary data for creating the session
            });
    
            if (!response.ok) throw new Error('Problem with create-checkout-session');
    
            const { sessionId } = await response.json();
    
            // Step 4: Redirect to Stripe Checkout
            const stripe = await stripePromise;
            stripe.redirectToCheckout({ sessionId });
        } catch (error) {
            // Handle errors here
            console.error('There was a problem:', error);
        }
    };

    return (
        <div className="container">
            <div className="fz-checkout">
                <form action="#" className="checkout-form" onSubmit={handleFormSubmit}>
               
                    <div className="fz-billing-details">
                        <div className="row gy-0 gx-3 gx-md-4">
                            <h3 className="fz-checkout-title">Delivery Details</h3>
                            <div className="col-6 col-xxs-12">
                                <input type="text" name="first-name" id="checkout-first-name" placeholder="First Name"/>
                            </div>
                            <div className="col-6 col-xxs-12">
                                <input type="text" name="last-name" id="checkout-last-name" placeholder="Last Name"/>
                            </div>

                            <div className="col-12">
                                <input type="text" name="address-line-one" id="checkout-address-line-one" placeholder="Address Line 1"/>
                            </div>

                            <div className="col-12">
                                <input type="text" name="apartment-name" id="checkout-apartment-name" placeholder="Apartment, Suite, Unit, etc. (optional)"/>
                            </div>

                            <div className="col-12">
                                <input type="text" name="city-name" id="checkout-city-name" placeholder="Town / City"/>
                            </div>

                            <div className="col-6 col-xxs-12">
                                <Form.Select className='state-select' name="states" id="checkout-states">
                                    <option value="Massachusetts">Massachusetts</option>
                                </Form.Select>
                            </div>

                            <div className="col-6 col-xxs-12">
                                <input type="text" name="zip-code" id="checkout-zip-code" placeholder="Zip Code"/>
                            </div>

                            <div className="col-6 col-xxs-12">
                                <input type="number" name="phone-number" id="checkout-phone-number" placeholder="Phone Number"/>
                            </div>

                            <div className="col-6 col-xxs-12">
                                <input type="email" name="email-address" id="checkout-email-address" placeholder="Email Address"/>
                            </div>

                            <div className="col-12 additional-info">
                                <label htmlFor="checkout-additional-info" className="fz-checkout-title">Additional Information</label>
                                <textarea name="additional-info" id="checkout-additional-info" placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
                            </div>
                        </div>
                    </div>

                <div className="fz-checkout-sidebar">
                    <div className="billing-summery">
                        <h4 className="fz-checkout-title">Billing Summary</h4>
                        <div className="cart-checkout-area">
                            <ul className="checkout-summary">
                                <li>
                                    <span className="checkout-summary__key">Subtotal</span>
                                    <span className="checkout-summary__value"><span>$</span>{subTotal}</span>
                                </li>

                                <li>
                                    <span className="checkout-summary__key">Shipping</span>
                                    <span className="checkout-summary__value"><span>$</span>{shipping}</span>
                                </li>

                                <li className="cart-checkout-total">
                                    <span className="checkout-summary__key">Total</span>
                                    <span className="checkout-summary__value"><span>$</span>{finalPrice}</span>
                                </li>
                            </ul>


                            <Link href="/cart" className="fz-1-banner-btn cart-checkout-btn">Edit Order</Link>
                        </div>
                    </div>

                    <div className="delivery-day">
                        <h4 className="fz-checkout-title">Delivery Day</h4>
                        <div className="col-6 col-xxs-12">
                            <Form.Select className='day-select' name="days" id="checkout-days">
                                <option value="Wednesday">Wednesday</option>
                                <option value="Sunday">Sunday</option>
                            </Form.Select>
                        </div>
                    </div>

                    <div className="payment-info">
                        <h4 className="fz-checkout-title">Payment</h4>
                        <p className="checkout-payment-descr">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#">privacy policy</a></p>
                        <button type="submit" className="fz-1-banner-btn cart-checkout-btn checkout-form-btn">Pay</button>
                    </div>
                </div>s
                </form>
                {clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                )}
            </div>
        </div>
    );
};

export default CheckoutSection;
