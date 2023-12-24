import Link from 'next/link'
import React from 'react'

const CategorySection3 = () => {
  return (
    <section className="fz-3-category-section">
            <div className="container">
                <div className="fz-3-section-heading">
                    <h2 className="fz-section-title">Browse By Type of Cake</h2>
                    <p className="fz-section-sub-title">Establishments producing and selling flour-based food like cakes cookies, and pastries are what bakeries.</p>
                </div>

                <div className="row gy-3 gy-sm-4 gx-3 justify-content-center">
                    <div className="col-lg-2 col-md-3 col-4 col-xxs-6">
                        <div className="fz-3-single-category">
                            <Link href="/shop" className="fz-3-single-category__img">
                                <img src="images/fz-cat-1.png" alt="Product Icon"/>
                            </Link>

                            <div className="fz-3-single-category__txt">
                                <Link href="/shop">Cupcakes</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 col-xxs-6">
                        <div className="fz-3-single-category">
                            <Link href="/shop" className="fz-3-single-category__img">
                                <img src="images/fz-cat-2.png" alt="Product Icon"/>
                            </Link>

                            <div className="fz-3-single-category__txt">
                                <Link href="/shop">Anniversary Cake</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 col-xxs-6">
                        <div className="fz-3-single-category">
                            <Link href="/shop" className="fz-3-single-category__img">
                                <img src="images/fz-cat-3.png" alt="Product Icon"/>
                            </Link>

                            <div className="fz-3-single-category__txt">
                                <Link href="/shop">Black Forest</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 col-xxs-6">
                        <div className="fz-3-single-category">
                            <Link href="/shop" className="fz-3-single-category__img">
                                <img src="images/fz-cat-4.png" alt="Product Icon"/>
                            </Link>

                            <div className="fz-3-single-category__txt">
                                <Link href="/shop">Chocolate Lady</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 col-xxs-6">
                        <div className="fz-3-single-category">
                            <Link href="/shop" className="fz-3-single-category__img">
                                <img src="images/fz-cat-5.png" alt="Product Icon"/>
                            </Link>

                            <div className="fz-3-single-category__txt">
                                <Link href="/shop">Pound Cakes</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-4 col-xxs-6">
                        <div className="fz-3-single-category">
                            <Link href="/shop" className="fz-3-single-category__img">
                                <img src="images/fz-cat-6.png" alt="Product Icon"/>
                            </Link>

                            <div className="fz-3-single-category__txt">
                                <Link href="/shop">Layer Cakes</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default CategorySection3