import React, { Fragment,useEffect } from 'react'
import Topnav from '../component/Topnav/Topnav'
import Topbanner from '../component/Topbanner/Topbanner'
import About from '../component/About/About'
import Services from '../component/Services/Services'
import Properties from '../component/Properties/Properties'
import Reviews from '../component/Reviews/Reviews'
import Footer from '../component/Footer/Footer'

function HomePage() {

  useEffect(()=>{
    window.scroll(0,0)
  },[])
  return (
    <Fragment>
    <Topnav/>
    <Topbanner/>
    <About/>
    <Services/>
    <Properties/>
    <Reviews/>
    <Footer/>
    </Fragment>
  )
}

export default HomePage
