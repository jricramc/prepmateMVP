import React from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import ShopAreaSection from '../shop/ShopAreaSection'
import ShopAreaSectionMill from '../shop/ShopAreaSectionMill'

const ShopMain = () => {
  return (
    <>
        <BreadcrumbSection title={"Shop Mill City"} current={"Products"}/>
        <ShopAreaSectionMill/>
    </>
  )
}

export default ShopMain