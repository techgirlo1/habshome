import React, { Fragment, useEffect } from 'react'
import Topnav from '../component/Topnav/Topnav'
import PageTop from '../component/PageTop/PageTop'
import About from '../component/About/About'
import Footer from '../component/Footer/Footer'
import AboutDesc from '../component/AboutDesc/AboutDesc'
import Summary from '../component/Summary/Summary'

function AboutPage() {

    useEffect(()=>{
        window.scroll(0,0)
      },[])
  return (
   <Fragment>
      <Topnav/>
    <PageTop pagetitle='About'/>
    <About/>
    <AboutDesc/>
    <Summary/>
    <Footer/>
   </Fragment>
  )
}

export default AboutPage
