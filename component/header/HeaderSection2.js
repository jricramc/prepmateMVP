import Link from 'next/link'
import React, { useContext } from 'react'
import HeaderNav from '../navigation/HeaderNav'
import HeaderRightContent from './HeaderRightContent'
import { FarzaaContext } from '@/context/FarzaaContext'

const HeaderSection2 = () => {
    const {isHeaderFixed} = useContext(FarzaaContext)
  return (
    <header className="fz-header-section fz-1-header-section inner-page-header">

        <div className={`bottom-header to-be-fixed ${isHeaderFixed? 'fixed':''}`}>
            <div className="container">
                <div className="row g-0 align-items-center">
                    <div className="col-lg-3 col-md-6 col-9">
                        <div className="fz-logo-container">
                            <Link href="/">
                                <img src="images/logo-3.png" alt="logo" className="fz-logo"/>
                            </Link>
                        </div>
                    </div>

                    <div className="col-6 header-nav-container d-lg-block d-none">
                    <HeaderNav position={'justify-content-center'}/>
                    </div>

                    <div className="col-lg-3 col-md-6 col-3">
                        <HeaderRightContent/>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default HeaderSection2