import { FarzaaContext } from '@/context/FarzaaContext'
import Link from 'next/link'
import React, { useContext } from 'react'

const MobileMenuSection = () => {
    const { isDropdownOpen, handleDropdownToggle } = useContext(FarzaaContext)
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

                    {/* <div className="fz-nav-item mean-last">
                        <Link href="/cart" className="fz-nav-link">Cart</Link>
                    </div>
                    <div className="fz-nav-item mean-last">
                        <Link href="/wishlist" className="fz-nav-link">Wishlist</Link>
                    </div>
                    <div className="fz-nav-item mean-last">
                        <Link href="/checkout" className="fz-nav-link">Checkout</Link>
                    </div>
                    <div className="fz-nav-item mean-last">
                        <Link href="/contact" className="fz-nav-link">Contact</Link>
                    </div> */}

                    <div className="fz-offcanvas-main-actions mb-15">
                        <div className="vertical-item">
                            <Link href="/">
                                <i className="fa-thin fa-home"></i>
                                <span className="fz-off-actions-text">
                                    <span>Home</span>
                                    <span>Home</span>
                                </span>
                            </Link>
                        </div>
                        <div className="vertical-item">
                            <Link href="/cart">
                                <span className="fz-off-actions-icon">
                                    <i className="fa-thin fa-bag-shopping"></i>
                                </span>
                                <span className="fz-off-actions-text">
                                    <span>View Cart</span>
                                    <span>View Cart</span>
                                </span>
                            </Link>
                        </div>
                        <div className="vertical-item">
                            <Link href="/wishlist">
                                <i className="fa-thin fa-heart"></i>
                                <span className="fz-off-actions-text">
                                    <span>View Wishlist</span>
                                    <span>View Wishlist</span>
                                </span>
                            </Link>
                        </div>
                    </div>


                </div>
            </nav>
        </div>
    )
}

export default MobileMenuSection