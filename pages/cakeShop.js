import FooterSection3 from '@/component/footer/FooterSection3'
import CakeShopMain from '@/component/main/CakeShopMain'
import CakeHeaderWrapper from '@/component/wrapper/CakeHeaderWrapper'
import Head from 'next/head'
import React from 'react'

const cakeShop = () => {
  return (
    <>
    <Head>
      <title>Farzaa - Cake Shop</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="images/favicon.png" />
    </Head>
    <>
    <CakeHeaderWrapper/>
    <CakeShopMain/>
    <FooterSection3/>
    </>
    </>
  )
}

export default cakeShop