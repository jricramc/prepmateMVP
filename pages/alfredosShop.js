import ShopMainSilk from '@/component/main/ShopMainSilk'
import Head from 'next/head'
import React from 'react'
import Layout from '@/component/layout/Layout'

const alfredosShop = () => {
  return (
    <>
    <Head>
      <title>PrepMate @ Alfredo's </title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="images/favicon.png" />
    </Head>
    <>
      <Layout>
        <ShopMainSilk/>
      </Layout> 
    </>
    </>
  )
}

export default alfredosShop