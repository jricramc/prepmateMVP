import FooterSection from "@/component/footer/FooterSection";
import HeaderSection from "@/component/header/HeaderSection";
import DoorShopMain from "@/component/main/DoorShopMain";
import Head from "next/head";


export default function Home() {
  return (
    <>
    <Head>
      <title>PrepMate</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="images/favicon.png" />
    </Head>
    <div className="fz-1-body">
      <HeaderSection/>
      <DoorShopMain/>
      <FooterSection/>
    </div>
    </>
  )
}
