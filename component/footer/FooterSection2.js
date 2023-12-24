import Link from 'next/link';
import React from 'react'

const FooterSection2 = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="fz-2-footer-section">
        <div className="fz-footer-top">
            <div className="container">
                <div className="row gy-5 justify-content-center justify-content-xl-between">
                    <div className="col-xl-3 col-lg-6 col-md-8">
                        <div className="fz-footer-about">
                            <div className="fz-logo">
                                <a href="index.html">
                                    <img src="images/logo-3.png" alt="logo"/>
                                </a>
                            </div>

                            <p className="fz-footer-about__txt">Made with the belief that home living should
                                be easy and expressive. All of our products
                                are designer made and rigorously tested.</p>

                            <div className="fz-footer-socials">
                                <div className="fz-footer-socials-title">Follow Us</div>
                                <ul className="d-flex">
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-tiktok"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
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

                    <div className="col-lg-3 col-md-4 col-6 col-xxs-12">
                        <div className="fz-footer-widget">
                            <h5 className="fz-footer-widget__title">Quick Link</h5>
                            <ul>
                                <li><Link href="/about">Our Story</Link></li>
                                <li><Link href="/blog">Blog & Press</Link></li>
                                <li><a href="#">Order History</a></li>
                                <li><a href="#">Wish List</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-5 col-md-8">
                        <div className="fz-footer-widget">
                            <h5 className="fz-footer-widget__title">News Letter</h5>
                            <div className="fz-footer-subscribe">
                                <p className="fz-footer-subscribe-txt">Sign up to get the latest on sales, new releases, store events and more.</p>

                                <div className="fz-footer-subscribe-form">
                                    <div className="fz-footer-subscribe-form-input">
                                        <input type="email" name="footer-subs-email" id="fz-footer-subs-email" placeholder="Email"/>
                                        <span className="fz-footer-subs-icon"><i className="fa-light fa-envelope-open"></i></span>
                                    </div>
                                    <button className="fz-footer-subs-btn">subscribe <i className="fa-light fa-paper-plane"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="fz-footer-bottom">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-lg-6">
                        <p className="fz-copyright">&copy;
                            {currentYear} Design & Developed by <b>CodeBasket</b>
                        </p>
                    </div>

                    <div className="col-lg-6 text-lg-end text-center">
                        <img src="images/card.png" alt="Pyament Methods" className="fz-payment-methods"/>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default FooterSection2