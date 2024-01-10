import React from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import ShopAreaSection from '../shop/ShopAreaSection'
import ShopAreaSectionSilk from '../shop/ShopAreaSectionSilk'

const ShopMainSilk = () => {
  return (
    <>
        <BreadcrumbSection title={"Shop Silk Road Cuisine"} current={"Products"}/>
        <ShopAreaSectionSilk/>
    </>
  )
}

export default ShopMainSilk