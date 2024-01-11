import React from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import ShopAreaSection from '../shop/ShopAreaSection'
import ShopAreaSectionDelight from '../shop/ShopAreaSectionDelight'

const ShopMainDelight = () => {
  return (
    <>
        <BreadcrumbSection title={"Shop Spice Delight"} current={"Products"}/>
        <ShopAreaSectionDelight/>
    </>
  )
}

export default ShopMainDelight