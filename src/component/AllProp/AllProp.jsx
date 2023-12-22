
import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import img4 from '../../assets/images/img4.jpg'
import { Zoom } from 'react-reveal';
import LightSpeed from 'react-reveal/LightSpeed';
function AllProp() {
  return (
    <Fragment>
   
    <Container>
      <Zoom top>
        <Row>
            <Col lg={6} md={6} sm={12} className='py-5'>
            <img src={img1} class="img-fluid"/>
            <h3 className="titleservices pt-3">167 Ajah Road,Ibeju Lekki Lagos.</h3>
            <p className='abtDesc'>&#8358; 20000000</p>
            </Col>

            <Col lg={6} md={6} sm={12} className='py-5'>
            <img src={img2} class="img-fluid"/>
            <h3 className="titleservices pt-3">189,Olawole Street Gbagada, Lagos.</h3>
            <p className='abtDesc'>&#8358; 18000000</p>
            </Col>

            <Col lg={6} md={6} sm={12} className='py-5'>
            <img src={img3} class="img-fluid"/>
            <h3 className="titleservices pt-3">189,Olawole Street Gbagada, Lagos.</h3>
            <p className='abtDesc'>&#8358; 18000000</p>
            </Col>


            <Col lg={6} md={6} sm={12} className='py-5'>
            <img src={img4} class="img-fluid"/>
            <h3 className="titleservices pt-3">167 Ajah Road,Ibeju Lekki Lagos.</h3>
            <p className='abtDesc'>&#8358; 20000000</p>
            </Col>

            <Col lg={6} md={6} sm={12} className='py-5'>
            <img src={img1} class="img-fluid"/>
            <h3 className="titleservices pt-3">167 Ajah Road,Ibeju Lekki Lagos.</h3>
            <p className='abtDesc'>&#8358; 20000000</p>
            </Col>

            <Col lg={6} md={6} sm={12} className='py-5'>
            <img src={img2} class="img-fluid"/>
            <h3 className="titleservices pt-3">189,Olawole Street Gbagada, Lagos.</h3>
            <p className='abtDesc'>&#8358; 18000000</p>
            </Col>

            <Col lg={6} md={6} sm={12} className='py-5'>
            <img src={img3} class="img-fluid"/>
            <h3 className="titleservices pt-3">189,Olawole Street Gbagada, Lagos.</h3>
            <p className='abtDesc'>&#8358; 18000000</p>
            </Col>


            <Col lg={6} md={6} sm={12} className='py-5'>
            <img src={img4} class="img-fluid"/>
            <h3 className="titleservices pt-3">167 Ajah Road,Ibeju Lekki Lagos.</h3>
            <p className='abtDesc'>&#8358; 20000000</p>
            </Col>
        </Row>
        </Zoom>
    </Container>
</Fragment>
  )
}

export default AllProp
