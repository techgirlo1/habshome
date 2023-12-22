import React, { Fragment, useEffect } from 'react'
import Topnav from '../component/Topnav/Topnav'
import PageTop from '../component/PageTop/PageTop'
import Footer from '../component/Footer/Footer'
import Contact from '../component/Contact/Contact'



function ContactPage() {

    useEffect(()=>{
        window.scroll(0,0)
      },[])
  return (
   <Fragment>
      <Topnav/>
      <PageTop pagetitle='Contact Us'/>
    <Contact/>
    <Footer/>
   </Fragment>
  )
}

export default ContactPage