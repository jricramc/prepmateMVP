import Link from 'next/link'
import React, { useContext } from 'react'
import CartItemTable from './CartItemTable'
import { FarzaaContext } from '@/context/FarzaaContext'

const CartSection = () => {
    const {
        subTotal, 
        delivery,
        salestax,
        serviceCharge,
        finalPrice, 
        cartItems,
        handleQuantityChange,
        handleRemoveItem,
    } = useContext(FarzaaContext)
  return (
    <div className="container">
        <div className="cart-section">
            <div className="cart-left inner-cart">
                <div className="cart-area">
                    <div className="cart__body">
                        <div className="table-responsive">
                            <CartItemTable cartArray={cartItems} remove={handleRemoveItem} quantity={handleQuantityChange}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cart-checkout-area">
                <h4 className="cart-checkout-area__title">Billing Summary</h4>

                <ul className="checkout-summary">
                    <li>
                        <span className="checkout-summary__key">Subtotal</span>
                        <span className="checkout-summary__value"><span>$</span>{subTotal.toFixed(2)}</span>
                    </li>

                    <li>
                        <span className="checkout-summary__key">Delivery</span>
                        <span className="checkout-summary__value"><span>$</span>{delivery}</span>
                    </li>

                    <li>
                        <span className="checkout-summary__key">Sales Tax</span>
                        <span className="checkout-summary__value"><span>$</span>{salestax.toFixed(2)}</span>
                    </li>

                    <li className="cart-checkout-total">
                        <span className="checkout-summary__key">Total</span>
                        <span className="checkout-summary__value"><span>$</span>{finalPrice.toFixed(2)}</span>
                    </li>
                </ul>


                <Link href="/checkout" className="fz-1-banner-btn cart-checkout-btn">Proceed to checkout</Link>
            </div>
        </div>
    </div>
  )
}

export default CartSection