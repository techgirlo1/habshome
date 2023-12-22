import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import '../../assets/css/responsive.css'
import { Zoom } from 'react-reveal'
function Topbanner() {
  return (
    <Fragment>
        <Container fluid className='imgbanner text-center p-0'>
          <div className='imgoverlay'>
           
          </div>
          <Zoom>
          <h1 className='textbanner'>BUILD YOUR FUTURE</h1>
          <p className='textdesc'>with HABS HOME your home is fully secured</p>
          </Zoom>
        </Container>
    </Fragment>
  )
}

export default Topbanner
