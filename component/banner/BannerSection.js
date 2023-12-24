import React, { useContext, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FarzaaContext } from '@/context/FarzaaContext';
import VideoModal from '../modal/VideoModal';
import Link from 'next/link';
import { firstBannerData } from '@/data/Data';

const BannerSection = () => {
    const {handleVideoShow} = useContext(FarzaaContext)
    const swiperRef = useRef(null);

    const goNext = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    };
  
    const goPrev = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slidePrev();
      }
    }
  return (
    <section className="fz-1-banner-section">
                <Swiper
                    ref={swiperRef}
                    slidesPerView={1}
                    className="fz-1-banner-slider owl-carousel"
                    autoplay={{ delay: 3000 }}
                    navigation={{
                        prevEl: 'owl-prev',
                        nextEl: 'owl-next',
                    }}
                    modules={[Navigation, Autoplay]}
                >
                    {firstBannerData.map((item)=>(
                       <SwiperSlide className="fz-1-banner-single-slide" key={item.id}>
                            <div className="container position-relative">
                                <div className="row">
                                    <div className="col-lg-6 col-md-7">
                                        <div className="fz-1-banner-txt">
                                            <h1 className="text5">{item.title}</h1>

                                            <div className="fz-1-banner-txt__btns">
                                                <button className="fz-1-banner-vid-btn" data-video-id="SwZynNzqBys" onClick={handleVideoShow}>
                                                    <i className="fa-solid fa-play"></i>
                                                </button>

                                                <Link href="/shop" className="fz-1-banner-btn">View More <i className="fa-light fa-arrow-up-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-5 align-self-end">
                                        <div className="fz-1-banner-img-container">
                                            <div className="sticker-container">
                                                <img src="images/sticker.png" alt="Sticker" className="sticker"/>
                                                <span>25k</span>
                                            </div>

                                            <div className="fz-1-banner-img">
                                                <img src={item.imgSrc} alt="Product Images"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide> 
                    ))}
                
           
                <div className="owl-nav">
                    <button type="button" role="presentation" className="owl-prev" onClick={goPrev}>
                        <i className="fa-solid fa-angle-left"></i>
                    </button>
                    <button type="button" role="presentation" className="owl-next" onClick={goNext}>
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                </div>
                </Swiper>
                <VideoModal/>
        </section>
  )
}

export default BannerSection