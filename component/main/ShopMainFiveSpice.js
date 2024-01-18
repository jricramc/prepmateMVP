import React from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import ShopAreaSection from '../shop/ShopAreaSection'
import ShopAreaSectionFiveSpice from '../shop/ShopAreaSectionFiveSpice'

const ShopMainFiveSpice = () => {
  return (
    <>
        <BreadcrumbSection title={"Shop Five Spices House"} current={"Products"}/>
        <ShopAreaSectionFiveSpice/>
    </>
  )
}

export default ShopMainFiveSpice