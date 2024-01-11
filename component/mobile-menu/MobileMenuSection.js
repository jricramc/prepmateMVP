import { FarzaaContext } from '@/context/FarzaaContext'
import Link from 'next/link'
import React, { useContext } from 'react'

const MobileMenuSection = () => {
    const {isDropdownOpen,handleDropdownToggle} = useContext(FarzaaContext)
    return (
        <div className="mean-bar">
            <Link 
            href="#nav" 
            className="meanmenu-reveal"
            ><span><span><span></span></span></span>
            </Link>
            <nav className="mean-nav">
                <div className="align-items-center justify-content-center mobile-menu-list-items">
                    <div className="fz-dropdown fz-nav-item">
                            {/* <a 
                            role="button" 
                            className="fz-nav-link"
                            >
                                <span>Home</span>
                                <i 
                                className={`fa-regular ${isDropdownOpen.home ? 'fa-minus':'fa-plus'}`} 
                                role='button' 
                                onClick={() => handleDropdownToggle('home')}
                                ></i>
                            </a> */}

                            {/* <ul className={`fz-submenu home-page-links ${isDropdownOpen.home? 'd-block':'d-none'}`}>
                                <li><Link href="/" className="fz-nav-link fz-submenu-nav-link sub-menu-link">Door Shop</Link></li>
                                <li><Link href="/jewelleryShop" className="fz-nav-link fz-submenu-nav-link sub-menu-link">Jewelry Shop</Link></li>
                                <li><Link href="/cakeShop" className="fz-nav-link fz-submenu-nav-link sub-menu-link">Cake Shop</Link></li>
                            </ul>  */}
                    </div>
                    <div className="fz-dropdown fz-nav-item">
                           <a 
                            role="button" 
                            className="fz-nav-link"
                            >
                                <span>Shop</span>
                                <i 
                                className={`fa-regular ${isDropdownOpen.shop ? 'fa-minus':'fa-plus'}`} 
                                role='button' 
                                onClick={() => handleDropdownToggle('shop')}
                                ></i>
                            </a>

                            <ul className={`fz-submenu shop-page-links ${isDropdownOpen.shop? 'd-block':'d-none'}`}>
                                <li><Link href="/shop" className="fz-nav-link fz-submenu-nav-link sub-menu-link">Shop</Link></li>
                                <li><Link href="/shop" className="fz-nav-link fz-submenu-nav-link sub-menu-link">Shop details</Link></li>
                            </ul>  
                    </div>
                    <div className="fz-dropdown fz-nav-item">
                            <a 
                            role="button" 
                            className="fz-nav-link"
                            >
                                <span>Pages</span>
                                <i 
                                className={`fa-regular ${isDropdownOpen.pages ? 'fa-minus':'fa-plus'}`} 
                                role='button' 
                                onClick={() => handleDropdownToggle('pages')}
                                ></i>
                            </a>

                            <ul className={`fz-submenu other-page-links ${isDropdownOpen.pages? 'd-block':'d-none'}`}>
                                <li><Link href="/about" className="fz-nav-link fz-submenu-nav-link sub-menu-link">About</Link></li>
                                <li><Link href="/faq" className="fz-nav-link fz-submenu-nav-link sub-menu-link">FAQ</Link></li>
                                <li><Link href="/wishlist" className="fz-nav-link fz-submenu-nav-link sub-menu-link">Wishlist</Link></li>
                                <li><Link href="/cart" className="fz-nav-link fz-submenu-nav-link sub-menu-link">Cart</Link></li>
                                <li><Link href="/account" className="fz-nav-link fz-submenu-nav-link sub-menu-link">Account</Link></li>
                                <li><Link href="/checkout" className="fz-nav-link fz-submenu-nav-link sub-menu-link">Checkout</Link></li>
                            </ul> 
                        
                    </div>
                    <div className="fz-dropdown fz-nav-item">
                            <a 
                            role="button" 
                            className="fz-nav-link"
                            >
                                <span>Blog</span>
                                <i 
                                className={`fa-regular ${isDropdownOpen.blog ? 'fa-minus':'fa-plus'}`} 
                                role='button' 
                                // onClick={() => handleDropdownToggle('blog')}
                                ></i>
                            </a>

                            {/* <ul className={`fz-submenu blog-page-links ${isDropdownOpen.blog? 'd-block':'d-none'}`}>
                                <li><Link href="/blog" className="fz-nav-link fz-submenu-nav-link sub-menu-link">Blog</Link></li>
                                <li><Link href="/blogDetails" className="fz-nav-link fz-submenu-nav-link sub-menu-link">Blog-details</Link></li>
                            </ul>    */}
                           
                    </div>
                    <div className="fz-nav-item mean-last">
                        <Link href="/contact" className="fz-nav-link">Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default MobileMenuSection