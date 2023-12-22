import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Zoom } from 'react-reveal';
import LightSpeed from 'react-reveal/LightSpeed';
function AboutDesc() {
  return (
    <Fragment>
        <Container>
            <Row>
                <Zoom left>
                <Col lg={12} md={12}sm={12} className='py-3'>
                    <h5>WHO WE ARE</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere exercitationem quia error, vel eius fuga, deserunt, magni obcaecati omnis quod iure! Amet cupiditate animi quod! Commodi adipisci dignissimos incidunt sapiente.</p>
                </Col>
                </Zoom>
                <Zoom left>
                <Col lg={12} md={12}sm={12} className='py-3'>
                    <h5>OUR MISSION</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere exercitationem quia error, vel eius fuga, deserunt, magni obcaecati omnis quod iure! Amet cupiditate animi quod! Commodi adipisci dignissimos incidunt sapiente.</p>
                </Col>
                </Zoom>
                <Zoom left>
                <Col lg={12} md={12}sm={12} className='py-3'>
                    <h5>OUR VISION</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere exercitationem quia error, vel eius fuga, deserunt, magni obcaecati omnis quod iure! Amet cupiditate animi quod! Commodi adipisci dignissimos incidunt sapiente.</p>
                </Col>
                </Zoom>
            </Row>
        </Container>
    </Fragment>
  )
}

export default AboutDesc
