import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Aboutimg from '../../assets/images/about.jpg';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { Zoom } from 'react-reveal';
import LightSpeed from 'react-reveal/LightSpeed';
function About() {
  return (
   <Fragment>
    <Container>
      <LightSpeed>
    <h1 className="titleservice pt-5">ABOUT US</h1>
    <div className="bottom"></div>
    </LightSpeed>
    <Zoom top>
      <Row>
         <Col lg={6} md={6} sm={12} className='abtDesc pt-3'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor natus blanditiis, suscipit molestiae exercitationem dolore enim voluptates ipsum placeat possimus laboriosam unde quae, quis numquam, quidem totam a nobis adipisci? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor natus blanditiis, suscipit molestiae exercitationem dolore enim voluptates ipsum placeat possimus laboriosam unde quae, quis numquam, quidem totam a nobis adipisci?</p>
            <NavLink to='/about' className='read'>READ MORE</NavLink>
         </Col>
       

         <Col lg={6} md={6} sm={12}>
           <img src={Aboutimg} className="img-fluid mt-3 abtimg" /> 
         </Col>
      </Row>
      </Zoom>
      </Container>
   </Fragment>
  )
}

export default About
