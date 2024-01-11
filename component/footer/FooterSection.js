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
                        </div>
                    </div>

                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6 col-xxs-12">
                        <div className="fz-footer-widget">
                            <h5 className="fz-footer-widget__title">Customer Service</h5>
                            <ul>
                                <li><a href="#">Restaurants</a></li>
                                <li><Link href="/contact">Contact</Link></li>
                                {/* <li><a href="#">About</a></li> */}
                            </ul>
                        </div>
                    </div>

                    {/* <div className="col-xxl-2 col-lg-3 col-md-4 col-6 col-xxs-12">
                        <div className="fz-footer-widget">
                            <h5 className="fz-footer-widget__title">Legal</h5>
                            <ul>
                                <li><Link href="/terms">Terms of Service</Link></li>
                                <li><Link href="/privacy">Privacy Policy</Link></li>
                                <li><Link href="/cookies">Cookie Policy</Link></li>
                            </ul>
                        </div>
                    </div> */}

                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6 col-xxs-12">
                        <div className="fz-footer__contact-info">
                            <h5 className="fz-footer-widget__title">Contact Information</h5>
                            <ul>
                                <li>
                                    <a href="tel:2147806726"><i className="fa-light fa-phone"></i> (214) 780-6726</a>
                                </li>
                                <li>
                                    <a href="mailto:support@prepmate.shop"><i className="fa-light fa-envelope-open-text"></i>support@prepmate.shop</a>
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
                            {currentYear} PrepMate. All Rights Reserved.
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