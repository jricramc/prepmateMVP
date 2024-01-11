import React from 'react'

const FeaturedSection = () => {
  return (
    <div className="fz-1-features-section">
        <div className="container">
            <div className="features-container align-items-center">
                <div className="fz-single-feature">
                    <div className="fz-single-feature__img">
                        <img src="images/fz-3-feature-1.png" alt="Feature Icon"/>
                    </div>
                    <div className="fz-single-feature__txt">
                        <h4 className="fz-single-feature__title">Delivery</h4>
                        <h6 className="fz-single-feature__sub-title">Only $2.99</h6>
                    </div>
                </div>

                <div className="fz-single-feature">
                    <div className="fz-single-feature__img">
                        <img src="images/fz-3-feature-2.png" alt="Feature Icon"/>
                    </div>
                    <div className="fz-single-feature__txt">
                        <h4 className="fz-single-feature__title">Refer Friends</h4>
                        <h6 className="fz-single-feature__sub-title">Earn Discounts</h6>
                    </div>
                </div>

                {/* <div className="fz-single-feature">
                    <div className="fz-single-feature__img">
                        <img src="images/fz-3-feature-3.png" alt="Feature Icon"/>
                    </div>
                    <div className="fz-single-feature__txt">
                        <h4 className="fz-single-feature__title">2 Day </h4>
                        <h6 className="fz-single-feature__sub-title">Policy Option</h6>
                    </div>
                </div> */}

                <div className="fz-single-feature">
                    <div className="fz-single-feature__img">
                        <img src="images/fz-3-feature-4.png" alt="Feature Icon"/>
                    </div>
                    <div className="fz-single-feature__txt">
                        <h4 className="fz-single-feature__title">Secure Payment</h4>
                        <h6 className="fz-single-feature__sub-title">System</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedSection