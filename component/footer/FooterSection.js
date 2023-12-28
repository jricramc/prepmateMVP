import Link from 'next/link';
import React from 'react'

const FooterSection = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="fz-footer-section fz-1-footer-section">
        <div className="fz-footer-top">
            <div className="container">
                <div className="row gy-md-5 gy-4 justify-content-center justify-content-lg-between">
                    <div className="col-xxl-4 col-lg-12 col-md-8">
                        <div className="fz-footer-about fz-footer-widget">
                            <div className="fz-logo fz-footer-widget__title">
                                <a href="index.html"><img src="images/logo-3.png" alt="logo"/></a>
                            </div>
                            <p className="fz-footer-about__txt">There Are Many Different Styles Of Including Aviator, Wayfarer, Cat-Eye, Round, Some Sunglasses Also Have Polarized Lenses</p>
                            <img src="images/card.png" alt="Pyament Methods" className="fz-payment-methods"/>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6 col-xxs-12">
                        <div className="fz-footer-widget">
                            <h5 className="fz-footer-widget__title">Ways to Shop</h5>
                            <ul>
                                <li><a href="#">Shop on Facebook</a></li>
                                <li><a href="#">Shop on Ebay</a></li>
                                <li><Link href="/shop">Shop by Restaurant</Link></li>
                                <li><Link href="/shop">Shop All</Link></li>
                                <li><a href="#">Coupons and Discounts</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6 col-xxs-12">
                        <div className="fz-footer-widget">
                            <h5 className="fz-footer-widget__title">Customer Service</h5>
                            <ul>
                                <li><a href="#">Shipping and Returns</a></li>
                                <li><a href="#">Product Care</a></li>
                                <li><a href="#">Returns & Policy</a></li>
                                <li><a href="#">Warranty & Lifetime Service</a></li>
                                <li><a href="#">Jewelry Care Instruction</a></li>
                                <li><Link href="/faq">FAQ</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6 col-xxs-12">
                        <div className="fz-footer-widget">
                            <h5 className="fz-footer-widget__title">Quick Links</h5>
                            <ul>
                                <li><Link href="/about">Our Story</Link></li>
                                <li><Link href="/blog">Blog & Press</Link></li>
                                <li><a href="#">Order History</a></li>
                                <li><a href="#">Wish List</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6 col-xxs-12">
                        <div className="fz-footer__contact-info">
                            <h5 className="fz-footer-widget__title">Store Address</h5>
                            <ul>
                                <li>
                                    <a href="#"><i className="fa-light fa-location-dot"></i> 16 Rr 2, Ketchikan, Alaska 99901, USA</a>
                                </li>
                                <li>
                                    <a href="tel:9072254144"><i className="fa-light fa-phone"></i> (907) 225-4144</a>
                                </li>
                                <li>
                                    <a href="mailto:info@webmail.com"><i className="fa-light fa-envelope-open-text"></i>info@webmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="fz-footer-bottom">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-md-6 col-12">
                        <p className="fz-copyright">
                            &copy;
                            {currentYear} Design & Developed by <b>CodeBasket</b>
                        </p>
                    </div>

                    <div className="col-md-6 col-12">
                        <div className="fz-footer-socials">
                            <ul>
                                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default FooterSection