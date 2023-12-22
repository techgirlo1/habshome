import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Zoom } from 'react-reveal';
import LightSpeed from 'react-reveal/LightSpeed';
function Services() {
  return (
    <Fragment>
        <Container>
          <LightSpeed>
    <h1 className="titleservice pt-5">OUR SERVICES</h1>
    <div className="bottom"></div>
    </LightSpeed>
    <Zoom>
            <Row className='pt-5'>
                <Col lg={6} md={6} sm={12}>
                <h4>Investment Sales</h4>
                <p className='abtDesc pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquid cumque voluptatum nulla impedit odio veniam officiis nam aut dolorum ducimus illum quasi, adipisci esse, cum, quos dolor asperiores natus.</p>
                <a href="" className='read'>READ MORE</a>
                </Col>

                <Col lg={6} md={6} sm={12}>
                <h4>Sales & Rentals</h4>
                <p className='abtDesc pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquid cumque voluptatum nulla impedit odio veniam officiis nam aut dolorum ducimus illum quasi, adipisci esse, cum, quos dolor asperiores natus.</p>
                <a href="" className='read'>READ MORE</a>
                </Col>

                <Col lg={6} md={6} sm={12} className='pt-5'>
                <h4>Mangement & Leasing</h4>
                <p className='abtDesc pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquid cumque voluptatum nulla impedit odio veniam officiis nam aut dolorum ducimus illum quasi, adipisci esse, cum, quos dolor asperiores natus.</p>
                <a href="" className='read'>READ MORE</a>
                </Col>


                <Col lg={6} md={6} sm={12} className='pt-5'>
                <h4>New Development</h4>
                <p className='abtDesc pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquid cumque voluptatum nulla impedit odio veniam officiis nam aut dolorum ducimus illum quasi, adipisci esse, cum, quos dolor asperiores natus.</p>
                <a href="" className='read'>READ MORE</a>
                </Col>

                  
            </Row>
            </Zoom>
        </Container>
    </Fragment>
  )
}

export default Services
