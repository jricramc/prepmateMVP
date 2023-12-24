import React from 'react'
import HeaderSection2 from '../header/HeaderSection2'
import FooterSection from '../footer/FooterSection'

const Layout = ({children}) => {
  return (
    <>
        <HeaderSection2/>
        {children}
        <FooterSection/>
    </>
  )
}

export default Layout