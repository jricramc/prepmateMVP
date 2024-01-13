import React from 'react'
import SearchFilter from './SearchFilter'
import ProductCategoryList from './ProductCategoryListMill'
import ProductPriceFilter from './ProductPriceFilter'
import ProductTag from './ProductTag'
import ProductViewFilter from './ProductViewFilter'
import ProductContainer from './ProductContainer'
import ProductPagination from './ProductPagination'
import ProductContainerMill from './ProductContainerMill'

const ShopAreaSectionMill = () => {
  return (
    <div className="shop-area">
        <div className="container">
            <div className="row gy-5 justify-content-center">
                {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 col-9 col-xxs-12 order-1 order-lg-0">
                    <div className="fz-sidebar">
                        <SearchFilter/>

                        <ProductCategoryList/>

                        <ProductPriceFilter/>

                        <ProductTag/>
                    </div>
                </div> */}

                <div className="col-xl-9 col-lg-8 order-0 order-lg-1">
                    {/* <ProductViewFilter/> */}

                    <ProductContainerMill/>

                    {/* <ProductPagination/> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopAreaSectionMill