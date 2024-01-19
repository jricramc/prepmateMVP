import React from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import ShopAreaSection from '../shop/ShopAreaSection'
import ShopAreaSectionDumpling from '../shop/ShopAreaSectionDumpling'

const ShopMainDumpling = () => {
  return (
    <>
        <BreadcrumbSection title={"Shop Dumpling Xuan"} current={"Products"}/>
        <ShopAreaSectionDumpling/>
    </>
  )
}

export default ShopMainDumpling