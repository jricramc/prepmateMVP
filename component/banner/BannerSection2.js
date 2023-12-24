import { FarzaaContext } from '@/context/FarzaaContext'
import Link from 'next/link'
import React, { useContext } from 'react'
import VideoModal from '../modal/VideoModal'

const BannerSection2 = () => {
    const {handleVideoShow} = useContext(FarzaaContext)
  return (
    <section className="fz-2-banner-section">
        <div className="container position-relative">
            <div className="fz-banner-left-actions">
                <div className="fz-banner-socials">
                    <ul className="d-flex">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">LinkedIn</a></li>
                    </ul>
                </div>

                <div className="fz-banner-search-btn">
                    <button className="fz-2-search-btn"><i className="fa-regular fa-magnifying-glass"></i></button>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="fz-banner-txt">
                        <h1 className="fz-2-heading">Creative Jewelry Collection</h1>

                        <div className="fz-def_btn_wrapper">
                            <Link href="/shop" className="fz-def-btn">
                                <span></span>
                                Shop Now
                                <i className="fa-light fa-arrow-up-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="fz-banner-vid">
                        <img src="images/banner-img.jpg" alt="background image" className="fz-banner-vid-img"/>
                        <button className="fz-banner-vid-btn" onClick={handleVideoShow}><i className="fa-solid fa-play"></i></button>
                        <div className="fz-banner-vid-txt">
                            <h4><span>25K</span> New Collections</h4>
                        </div>

                        <div className="fz-banner-rounded-sticker">
                            <img className="fz-rotateText" src="images/curved-txt.png" alt="rotate-text image"/>
                            <img className="fz-diamond-icon" src="images/diamond.png" alt="diamond image"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fz-cbsearchbar fz-cb-sidebar-area">
                <button className="fz-cbsearchbar__close"><i className="fa-light fa-xmark"></i></button>
                <div className="search-wrap text-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-10 col-lg-8 pt-100 pb-100">
                                <h2 className="fz-cbsearchbar__title">What Product Are You Looking For?</h2>
                                <div className="fz-cbsearchbar__form">
                                    <form action="#">
                                        <input type="search" name="s" placeholder="Search Product"/>
                                        <button className="fz-cbsearchbar__search-btn" type="submit"><i className="fa-light fa-magnifying-glass"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fz-overlay"></div>
        </div>
        <VideoModal/>
    </section>
  )
}

export default BannerSection2