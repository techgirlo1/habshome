import React, { Fragment } from 'react'
import { Col, Container, NavLink, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import moment from 'moment/moment';
import { Zoom } from 'react-reveal';

function Footer() {

    var current=moment().format("YYYY")

  return (
   <Fragment>
    <Container fluid className='footer p-0 '>
        <div className='footeroverlay'>

        </div>
        <Zoom top>
       <Row>
        <Col lg={4} md={4} sm={12} className='text-center'>
            <h4 className='textdescs'>Follow Us</h4>
        <div className='footerdiv'>
          <a href='#'><FontAwesomeIcon icon={faFacebook} size='2x'className='footericon' /></a>
          <a href='#'><FontAwesomeIcon icon={faTwitter} size='2x'className='footericon' /></a> 
          <a href='#'><FontAwesomeIcon icon={faInstagram} size='2x'className='footericon' /></a>  
          </div>
        </Col>


        <Col lg={4} md={4} sm={12} className='textdes text-justify'>
         <span className='textdes'> Address : No 3 ibeju lekki, Lagos.</span><br></br>
           <span className='textdes'> Phone:+23467345645.</span><br></br>
           <span className='textdes'> Email:infohab@gmail.com</span><br></br>
        </Col>

        <Col lg={4} md={4} sm={12} className=' text-justify'>
                <h4  className='textdescs'>Information</h4>
                <NavLink to="about" className='footerLink' >About</NavLink>
                <NavLink to="about" className='footerLink' >Company Profile</NavLink>
                <NavLink to="contact" className='footerLink' >Contact</NavLink>
                
                </Col>
                <hr style={{color:"white",marginTop:"40px"}}></hr>
                <Col lg={12} md={12} sm={12} className='text-center'>
                    <p className='footerLink'>Designed and Developed by Sanusi Habeebat.&copy;{current}. All Right Reserved</p>
                </Col>
       </Row>
       </Zoom>
       </Container>
   </Fragment>
  )
}

export default Footer
