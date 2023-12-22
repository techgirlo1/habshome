import React, { Fragment, useEffect } from 'react'
import Topnav from '../component/Topnav/Topnav'
import PageTop from '../component/PageTop/PageTop'
import Footer from '../component/Footer/Footer'
import AllProp from '../component/AllProp/AllProp'


function PropPage() {

    useEffect(()=>{
        window.scroll(0,0)
      },[])
  return (
   <Fragment>
      <Topnav/>
      <PageTop pagetitle='Available Properties'/>
    <AllProp/>
    <Footer/>
   </Fragment>
  )
}

export default PropPage