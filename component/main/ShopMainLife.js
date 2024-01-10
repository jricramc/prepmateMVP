import React from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import ShopAreaSection from '../shop/ShopAreaSection'
import ShopAreaSectionLife from '../shop/ShopAreaSectionLife'

const ShopMainLife = () => {
  return (
    <>
        <BreadcrumbSection title={"Shop Life Alive"} current={"Products"}/>
        <ShopAreaSectionLife/>
    </>
  )
}

export default ShopMainLife