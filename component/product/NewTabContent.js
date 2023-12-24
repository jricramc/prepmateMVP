import { FarzaaContext } from '@/context/FarzaaContext'
import Link from 'next/link'
import React, { useContext } from 'react'

const NewTabContent = () => {
    const {
        randomizedItems,
        addToJeweleryWishlist,
        addToJeweleryCart,
    } = useContext(FarzaaContext)
  return (
    <div className="row gy-4 gx-3 justify-content-center">
        {randomizedItems.map((item) => (
            <div className="col-xl-3 col-md-4 col-6 col-xxs-12" key={item.id}>
                <div className="fz-2-single-product">
                    <div className="fz-2-single-product-img">
                        <img src={item.imgSrc} alt={item.name}/>

                        <div className="fz-2-single-product-actions">
                            <button 
                            className="fz-add-to-cart-btn"
                            onClick={() => addToJeweleryCart(item.id)}
                            >Add to cart</button>
                            <button 
                            className="fz-add-to-wishlist"
                            onClick={() => {
                                addToJeweleryWishlist(item.id)
                                console.log(item.isInWishlist)
                                }}
                            >{item.isInWishlist? (<i className="fa-solid fa-heart"></i>):(<i className="fa-regular fa-heart"></i>)}</button>
                        </div>
                    </div>
                    <div className="fz-2-single-product-txt">
                        <span className="fz-2-single-product-category"><Link href="shop">{item.category}</Link></span>
                        <h5 className="fz-2-single-product-title"><Link href="shopDetails">{item.name}</Link></h5>
                    <span className="fz-2-single-product-price">${item.price}<span className="prev-price">${item.oldPrice}</span></span>
                    </div>
                </div>
            </div> 
        ))}
       
    </div>
    )
}

export default NewTabContent