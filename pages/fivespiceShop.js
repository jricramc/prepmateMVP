import ShopMainFiveSpice from '@/component/main/ShopMainFiveSpice'
import Head from 'next/head'
import React from 'react'
import Layout from '@/component/layout/Layout'

const fivespiceShop = () => {
  return (
    <>
    <Head>
      <title>PrepMate @ Five Spices</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="images/favicon.png" />
    </Head>
    <>
      <Layout>
        <ShopMainFiveSpice/>
      </Layout> 
    </>
    </>
  )
}

export default fivespiceShop