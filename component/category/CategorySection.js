import Link from 'next/link';
import React from 'react';

const CategorySection = () => {
  return (
    <section className="fz-1-category-section">
      <div className="container">
        <div className="fz-1-section-heading">
          <h2 className="fz-section-title">Shop By Restaurant</h2>
        </div>

        <div className="row g-md-4 g-3 justify-content-center align-items-center align-items-xl-stretch">
          {/* Each item as a column with the same size */}
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 fz-1-category-col">
            <Link href="/millShop">
              <div className="fz-1-single-category">
                <img src="images/mill.jpeg" alt="Product Icon" />
                <h5 className="fz-1-single-category__title">Mill City</h5>
              </div>
            </Link>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 fz-1-category-col">
            <Link href="/lifealiveShop">
              <div className="fz-1-single-category">
                <img src="images/lifealive.jpeg" alt="Product Icon" />
                <h5 className="fz-1-single-category__title">Life Alive</h5>
              </div>
            </Link>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 fz-1-category-col">
            <Link href="/silkroadShop">
              <div className="fz-1-single-category">
                <img src="images/silkroad.jpeg" alt="Product Icon" />
                <h5 className="fz-1-single-category__title">Silk Road Cuisine</h5>
              </div>
            </Link>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 fz-1-category-col">
            <Link href="/shop">
              <div className="fz-1-single-category">
                <img src="images/dosa.jpeg" alt="Product Icon" />
                <h5 className="fz-1-single-category__title">Dosa N Curry</h5>
              </div>
            </Link>
          </div>

          {/* Add more items here if needed */}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
