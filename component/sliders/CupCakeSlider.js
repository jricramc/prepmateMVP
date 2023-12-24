import React, { useContext, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import { FarzaaContext } from '@/context/FarzaaContext';

const CupCakeSlider = () => {
    const {
        addToCakeCart,
        addToCakeWishlist,
        handleProductViewOpen,
        cakeListArray,
        slides
    } = useContext(FarzaaContext)
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
    <section className="fz-3-layer-cake-section">
        <div className="container">
            <div className="fz-3-section-heading">
                <div className="section-heading__txt">
                    <h2 className="fz-section-title">Cup Cakes</h2>
                    <p className="fz-section-sub-title">True Pound Cake is a recipe that dates</p>
                </div>

                <div className="section-heading__actions">
                    <div className="fz-cup-cake-slider-nav fz-3-slider-nav" ref={swiperRef}>
                        <button type="button" role="presentation" className="owl-prev" onClick={goPrev}>
                            <i className="fa-solid fa-angle-left"></i>
                        </button>
                        <button type="button" role="presentation" className="owl-next" onClick={goNext}>
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
                </div>
            </div>

            <Swiper 
            slidesPerView={slides}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 3000 }}
            navigation={{
                prevEl: '.owl-prev',
                nextEl: '.owl-next',
            }}
            modules={[Navigation, Autoplay]}
            className="fz-cup-cake-slider owl-carousel"
            >
                {cakeListArray.slice(12,18).map((item) => (
                    <SwiperSlide className="fz-3-single-product" key={item.id}>
                        <div className="fz-3-single-product__img">
                            <img src={item.imgSrc} alt={item.name}/>
                            <div className="fz-3-single-product__actions">
                                <div className="top-actions">
                                    <button
                                        className="fz-3-add-to-wishlist"
                                        onClick={() => addToCakeWishlist(item.id)}
                                    >{
                                        item.isInWishlist? (<i className='fa-solid fa-heart'></i>):(<i className='fa-light fa-heart'></i>)
                                    }</button>
                                </div>
                                <div className="bottom-actions">
                                    <button 
                                    className="fz-3-add-to-cart"
                                    onClick={() => addToCakeCart(item.id)}
                                    >Add to cart</button>
                                    <button 
                                    className="fz-3-quick-view"
                                    onClick={handleProductViewOpen}
                                    >Quick view</button>
                                </div>
                            </div>
                        </div>

                        <div className="fz-3-single-product__txt">
                            <Link href="/shopDetails" className="fz-3-single-product__title">{item.name}</Link>
                            <p className="fz-3-single-product__price">
                                <span className="current-price">${item.price}</span>
                                <span className="prev-price text-decoration-line-through">${item.oldPrice}</span>
                            </p>
                        </div>
                    </SwiperSlide>  
                ))}
                
            </Swiper>
        </div>
    </section>
  )
}

export default CupCakeSlider