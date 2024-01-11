import React, { useContext, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import { Nav } from 'react-bootstrap';
import { FarzaaContext } from '@/context/FarzaaContext';

const CollectionSection = () => {
    const {addToCart,addToWishlist,paginatedProducts,slides} = useContext(FarzaaContext)
    const [activeTab, setActiveTab] = useState('all');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
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
    };
    
    const filteredItemList =
    activeTab === 'all'
      ? paginatedProducts
      : paginatedProducts.filter((item) => item.category === activeTab);
  return (
    <section className="fz-1-latest-collection">
        {/* <div className="container">
            <div className="fz-1-section-heading">
                <h2 className="fz-section-title">All Restaurants</h2>
            </div>

            <Nav 
            activeKey={activeTab}
            onSelect={handleTabChange}
            className="filter-navs"
            >
                <Nav.Item>
                    <Nav.Link eventKey='all' role='button'>
                        <span className="filter-nav-order">01</span>
                        <span className="filter-nav-name">All Door</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='Solid Color Door' role='button'>
                        <span className="filter-nav-order">02</span>
                        <span className="filter-nav-name">Solid Color Door</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='Double Layer Door' role='button'>
                        <span className="filter-nav-order">03</span>
                        <span className="filter-nav-name">Double Layer Door</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='Chinese Door' role='button'>
                        <span className="filter-nav-order">04</span>
                        <span className="filter-nav-name">Chinese Door</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='Plastic Door' role='button'>
                        <span className="filter-nav-order">05</span>
                        <span className="filter-nav-name">Plastic Door</span>
                    </Nav.Link>
                </Nav.Item>

                <div className="fz-1-latest-products-slider-nav" ref={swiperRef}>
                    <button type="button" className="product-prev" onClick={goPrev}>
                        <i className="fa-regular fa-angle-left"></i>
                    </button>
                    <button type="button" className="product-next" onClick={goNext}>
                        <i className="fa-regular fa-angle-right"></i>
                    </button>
                </div>                
            </Nav>


            <Swiper
                slidesPerView={slides}
                className="fz-1-products-container"
                navigation={{
                    prevEl: '.product-prev',
                    nextEl: '.product-next',
                }}
                modules={[Navigation]}
            >
                {
                    filteredItemList.slice(0,5).map((item)=>(
                        <SwiperSlide className="fz-1-single-product wood-door" key={item.id}>
                            <div className="fz-single-product__img">
                                <img src={item.imgSrc} alt="Product Image"/>
                                <div className="fz-single-product__actions">
                                    <button 
                                    className="fz-add-to-wishlist-btn"
                                    onClick={() => addToWishlist(item.id)}
                                    >
                                        <span className="btn-txt">add To wishlist</span>
                                        <span className="btn-icon">{item.isInWishlist? (<i className="fa-solid fa-heart"></i>):(<i className="fa-light fa-heart"></i>)}</span>
                                    </button>

                                    <button 
                                    className="fz-add-to-cart-btn"
                                    onClick={() => addToCart(item.id)}
                                    >
                                        <span className="btn-txt">add To cart</span>
                                        <span className="btn-icon"><i className="fa-light fa-cart-shopping"></i></span>
                                    </button>

                                    <button className="fz-add-to-compare-btn">
                                        <span className="btn-txt">select to compare</span>
                                        <span className="btn-icon"><i className="fa-light fa-arrow-right-arrow-left"></i></span>
                                    </button>
                                </div>
                            </div>

                            <div className="fz-single-product__txt">
                                <Link href="/shopDetails" className="fz-single-product__title">{item.name}</Link>
                                <p className="fz-single-product__price">
                                    <span className="current-price">${item.price}</span>
                                </p>
                            </div>
                        </SwiperSlide> 
                    ))
                }
            </Swiper>
        </div> */}
    </section>
  )
}

export default CollectionSection