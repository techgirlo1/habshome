import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img5 from '../../assets/images/img5.jpg';
import img6 from '../../assets/images/img6.jpg';
import img7 from '../../assets/images/img7.jpg';
import {  faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { Zoom } from 'react-reveal';
import LightSpeed from 'react-reveal/LightSpeed';
function Reviews() {


   


  return (
    <Fragment>
        <Container>
          <LightSpeed>
        <h1 className='titleservice pt-5'>WHAT OUR CUSTOMERS SAY?</h1>
            <div className="bottom"></div>
            </LightSpeed>
            <Zoom top>
            <Row className='text-center justify-content-center'>
                <Col lg={12} md={12} sm={12}>
            
            
             <img src={img5} className='img-fluid py-5 circleImg'/>
             <div>
             <FontAwesomeIcon icon={faQuoteRight} size='4x' className='social'/>
              <p className='reviewdesc pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Ad distinctio maiores libero iure cumque aspernatur unde<br></br> velit voluptatibus voluptate ipsum vitae, dicta illum fugit<br></br> veritatis illo quisquam. Delectus, quod error.</p> 
              <p>Adams Family</p>
              </div>
                </Col>

                <Col lg={12} md={12} sm={12}>
            
            
             <img src={img6} className='img-fluid py-5 circleImg'/>
             <div>
             <FontAwesomeIcon icon={faQuoteRight} size='4x' className='social'/>
              <p className='reviewdesc pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Ad distinctio maiores libero iure cumque aspernatur unde<br></br> velit voluptatibus voluptate ipsum vitae, dicta illum fugit<br></br> veritatis illo quisquam. Delectus, quod error.</p> 
              <p>Olubusayo Dayo</p>
              </div>
                </Col>
   

                <Col lg={12} md={12} sm={12}>
            
            
             <img src={img7} className='img-fluid py-5 circleImg'/>
             <div>
             <FontAwesomeIcon icon={faQuoteRight} size='4x' className='social'/>
              <p className='reviewdesc pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Ad distinctio maiores libero iure cumque aspernatur unde<br></br> velit voluptatibus voluptate ipsum vitae, dicta illum fugit<br></br> veritatis illo quisquam. Delectus, quod error.</p> 
              <p>Abubakr Family</p>
              </div>
                </Col>
            </Row>
            </Zoom>
        </Container>
    </Fragment>
  )
}

export default Reviews
