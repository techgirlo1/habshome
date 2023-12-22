import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Zoom } from 'react-reveal';
import LightSpeed from 'react-reveal/LightSpeed';

function Contact() {
    return (
        <Fragment>
              <Container className='mt-5'>
              
            <Row>
            
                <Col lg={6} md={6} sm={12}>
                <Zoom top> 
                    <h1 className='title'>Contact Us</h1>
                      
                    <Form>
          <Form.Group className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text"  required placeholder="Enter Your Name"  id="name" />
            
          </Form.Group>
    
          <Form.Group className="mb-3">
            <Form.Label>Your Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Your Email"  required id='email' />
            
          </Form.Group>
    
    
          
    
    
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea"  required rows={3}  id="message"  />
            
          </Form.Group>
    
    
    
          
          <Button variant="dark" className='mb-3'>
            Submit
          </Button>
          
        </Form>
        </Zoom>
                </Col>
                
                
                <Col lg={6} md={6} sm={12}>
                <Zoom>
                <h1 className='title'>Let's Discuss</h1>
                <p className='desc'>
                Address : No 3 ibeju lekki, Lagos. <br/>
                        <FontAwesomeIcon icon={faEnvelope}/> infohab@gmail.com<br/>
                        <FontAwesomeIcon icon={faPhone}/> +23467345645
                    </p>
                    </Zoom>
                </Col>
                
            </Row>
           
            </Container>
        </Fragment>
      )
}

export default Contact
