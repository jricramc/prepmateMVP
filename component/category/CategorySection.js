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
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 fz-1-category-col" >
            <Link href="/millShop">
              <div className="fz-1-single-category">
                <img src="images/millcity.jpg" alt="Product Icon" className="front-page-image"/>
                <h5 className="fz-1-single-category__title">Mill City</h5>
              </div>
            </Link>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 fz-1-category-col">
            <Link href="/lifealiveShop">
              <div className="fz-1-single-category">
                <img src="images/lifealive.jpg" alt="Product Icon" className="front-page-image"/>
                <h5 className="fz-1-single-category__title">Life Alive</h5>
              </div>
            </Link>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 fz-1-category-col">
            <Link href="/silkroadShop">
              <div className="fz-1-single-category">
                <img src="images/silkroad.jpg" alt="Product Icon" className="front-page-image"/>
                <h5 className="fz-1-single-category__title">Silk Road Cuisine</h5>
              </div>
            </Link>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 fz-1-category-col">
            <Link href="/delightShop">
              <div className="fz-1-single-category">
                <img src="images/spice-delight/delight.jpg" alt="Product Icon" className="front-page-image"/>
                <h5 className="fz-1-single-category__title">Spice Delight</h5>
              </div>
            </Link>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 fz-1-category-col">
            <Link href="/fivespiceShop">
              <div className="fz-1-single-category">
                <img src="images/five-spice/5spice.png" alt="Product Icon" className="front-page-image"/>
                <h5 className="fz-1-single-category__title">Five Spices House</h5>
              </div>
            </Link>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 fz-1-category-col">
            <Link href="/dumplingShop">
              <div className="fz-1-single-category">
                <img src="images/dumpling/dumpling.jpeg" alt="Product Icon" className="front-page-image"/>
                <h5 className="fz-1-single-category__title">Dumpling Xuan</h5>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CategorySection;
