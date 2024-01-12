import Link from 'next/link'
import React from 'react'

const HeaderNav = ({position}) => {
  return (
    <nav className="fz-header-nav">
        <ul className={`align-items-center ${position}`}>
            {/* <li className="fz-dropdown fz-nav-item">
                <a role="button" className="fz-nav-link"><span>home</span> <i className="fa-regular fa-plus"></i></a>

                <ul className="fz-submenu">
                    <li><Link href="/" className="fz-nav-link fz-submenu-nav-link">Door Shop</Link></li>
                    <li><Link href="/jewelleryShop" className="fz-nav-link fz-submenu-nav-link">Jewellery Shop</Link></li>
                    <li><Link href="/cakeShop" className="fz-nav-link fz-submenu-nav-link">Cake Shop</Link></li>
                </ul>
            </li> */}
            <li className="fz-dropdown fz-nav-item">
                <a role="button" className="fz-nav-link"><span>shop restaurants</span> <i className="fa-regular fa-plus"></i></a>

                <ul className="fz-submenu">
                    <li><Link href="/millShop" className="fz-nav-link fz-submenu-nav-link">Mill City</Link></li>
                    <li><Link href="/lifealiveShop" className="fz-nav-link fz-submenu-nav-link">Life Alive</Link></li>
                    <li><Link href="/silkroadShop" className="fz-nav-link fz-submenu-nav-link">Silk Road Cuisine</Link></li>
                    <li><Link href="/delightShop" className='fz-nav-link fz-submenu-nav-link'>Spice Delight</Link></li>

                </ul>
            </li>
            {/* <li className="fz-dropdown fz-nav-item">
                <a role="button" className="fz-nav-link"><span>pages</span> <i className="fa-regular fa-plus"></i></a>

                <ul className="fz-submenu">
                    <li><Link href="/about" className="fz-nav-link fz-submenu-nav-link">About</Link></li>
                    <li><Link href="/faq" className="fz-nav-link fz-submenu-nav-link">FAQ</Link></li>
                    <li><Link href="/wishlist" className="fz-nav-link fz-submenu-nav-link">Wishlist</Link></li>
                    <li><Link href="/cart" className="fz-nav-link fz-submenu-nav-link">Cart</Link></li>
                    <li><Link href="/account" className="fz-nav-link fz-submenu-nav-link">Account</Link></li>
                    <li><Link href="/checkout" className="fz-nav-link fz-submenu-nav-link">Checkout</Link></li>
                </ul>
            </li> */}
            {/* <li className="fz-dropdown fz-nav-item">
                <a role="button" className="fz-nav-link">blog <i className="fa-regular fa-plus"></i></a>

                <ul className="fz-submenu">
                    <li><Link href="/blog" className="fz-nav-link fz-submenu-nav-link">Blog</Link></li>
                    <li><Link href="/blogDetails" className="fz-nav-link fz-submenu-nav-link">Blog-details</Link></li>
                </ul>
            </li> */}
            <li className="fz-nav-item"><Link href="/contact" className="fz-nav-link">Contact</Link></li>
        </ul>
    </nav>
  )
}

export default HeaderNav