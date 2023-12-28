import Link from 'next/link'
import React from 'react'

const CategorySection = () => {
  return (
    <section className="fz-1-category-section">
        <div className="container">
            <div className="fz-1-section-heading">
                <h2 className="fz-section-title">Shop By Restaurant</h2>
            </div>

            <div className="row g-md-4 g-3 justify-content-center align-items-center align-items-xl-stretch">
                <div className="col-xl-3 col-lg-4 col-8 col-xxs-12 fz-1-category-col">
                    <Link href="/shop" className="fz-1-single-category">
                        <img src="images/healthy-meal.jpg" alt="Product Icon"/>
                        <h5 className="fz-1-single-category__title">Restaurant 5</h5>
                    </Link>

                    <Link href="/shop" className="fz-1-single-category">
                        <img src="images/five.png" alt="Product Icon"/>
                        <h5 className="fz-1-single-category__title">Five Spices House</h5>
                    </Link>
                </div>

                <div className="col-xl-6 col-4 col-xxs-12">
                    <Link href="/shop" className="fz-1-single-category">
                        <img src="images/hongkong.jpeg" alt="Product Icon"/>
                        <h5 className="fz-1-single-category__title">Hong Kong Harvard Sq.</h5>
                    </Link>
                </div>

                <div className="col-xl-3 col-lg-4 col-8 col-xxs-12 fz-1-category-col">
                    <Link href="/shop" className="fz-1-single-category">
                        <img src="images/dosa.jpeg" alt="Product Icon"/>
                        <h5 className="fz-1-single-category__title">Dosa N Curry</h5>
                    </Link>

                    <Link href="/shop" className="fz-1-single-category">
                        <img src="images/mill.jpeg" alt="Product Icon"/>
                        <h5 className="fz-1-single-category__title">Mill City</h5>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CategorySection