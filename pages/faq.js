import FaqMain from '@/component/main/FaqMain'
import Head from 'next/head'
import React from 'react'
import Layout from '@/component/layout/Layout'

const faq = () => {
  return (
    <>
    <Head>
      <title>FAQ</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="images/favicon.png" />
    </Head>
    <>
      <Layout>
        <FaqMain/>
      </Layout>  
    </>  
    </>
  )
}

export default faq