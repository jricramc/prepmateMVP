import React, { useContext } from 'react'
import WishlistModal from '../modal/WishlistModal'
import CartModal from '../modal/CartModal'
import { FarzaaContext } from '@/context/FarzaaContext'

const HeaderRightContent = () => {
    const {
        handleWishlistShow,
        handleCartShow,
        cartItemAmount,
        wishlist,
        cartItems,
        handleQuantityChange,
        handleRemoveItem,
        handleRemoveItemWishlist,
        handleSidebarOpen,
        wishlistItemAmount
    } = useContext(FarzaaContext)

  return (
    <>
    <div className="fz-header-right-content">

        <ul className="fz-header-right-actions d-flex align-items-center justify-content-end">
            <li>
                <button className="fz-header-wishlist-btn d-none d-lg-block" onClick={handleWishlistShow}>
                    <i className="fa-light fa-heart"></i>
                    <span className="count">{wishlistItemAmount}</span>
                </button>
            </li>
            <li>
                <button className="fz-header-cart-btn d-none d-lg-block" onClick={handleCartShow}>
                    <i className="fa-light fa-shopping-bag"></i>
                    <span className="count">{cartItemAmount}</span>
                </button>
            </li>
            <li className="d-block d-lg-none"><a role="button" onClick={handleSidebarOpen} className="fz-hamburger"><i className="fa-light fa-bars-sort"></i></a></li>
        </ul>
    </div>
    <WishlistModal wishlistArray={wishlist} removeItem={handleRemoveItemWishlist}/>
    <CartModal cartArray={cartItems} remove={handleRemoveItem} quantity={handleQuantityChange}/>
    </>
  )
}

export default HeaderRightContent