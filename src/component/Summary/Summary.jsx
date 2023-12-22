import React, { Fragment, useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheckSquare, faClock, faFaceSmile, faTrophy } from "@fortawesome/free-solid-svg-icons";
import CountUp from 'react-countup';
import ReactVisibilitySensor from "react-visibility-sensor";
import Zoom from 'react-reveal/Zoom';

function Summary() {

 




  return (
   <Fragment>
    <div className=' summaryoverlay p-0'>
        
        <Container  className="text-center">
          <Row>
                <Col lg={12} md={12} sm={12}>
                 <Row className= "proj">
                  
                     <Col lg={3} md={6} sm={12}>
                     <Zoom top>
                     
                        <h1 className="sumNum">
                        <CountUp start={0} end={1000}>
                  {({ countUpRef, start }) => (
                    
                 
                 <ReactVisibilitySensor onChange={start} delayedCall>
                 <span ref={countUpRef} />
               </ReactVisibilitySensor>
            
               )}
               </CountUp>
               </h1>
                        <h4 className="sumTitle">Apartment Sold</h4>
                        <div className="line"></div>
                        </Zoom>
                        </Col>
                        
                     <Col lg={3} md={6} sm={12}>
                     <Zoom top>
                     
                     <h1 className="sumNum">
                        <CountUp start={0} end={3000}>
                  {({ countUpRef, start }) => (
                    
                 
                 <ReactVisibilitySensor onChange={start} delayedCall>
                 <span ref={countUpRef} />
               </ReactVisibilitySensor>
            
               )}
               </CountUp>
               </h1>
                    
                        <h4 className="sumTitle">Happy Clients</h4>
                        <div className="line"></div>
                </Zoom>
                        </Col>
                     <Col lg={3} md={6} sm={12}>
                     <Zoom top>
                     <h1 className="sumNum">
                        <CountUp start={0} end={8000}>
                  {({ countUpRef, start }) => (
                    
                 
                 <ReactVisibilitySensor onChange={start} delayedCall>
                 <span ref={countUpRef} />
               </ReactVisibilitySensor>
            
               )}
               </CountUp>
               </h1>
                        <h4 className="sumTitle">Listed Properties</h4>
                        <div className="line"></div> 
                        </Zoom>
                        </Col>


                        <Col lg={3} md={6} sm={12}>
                     <Zoom top>
                     <h1 className="sumNum">
                        <CountUp start={0} end={500}>
                  {({ countUpRef, start }) => (
                    
                 
                 <ReactVisibilitySensor onChange={start} delayedCall>
                 <span ref={countUpRef} />
               </ReactVisibilitySensor>
            
               )}
               </CountUp>
               </h1>
                        <h4 className="sumTitle">House Rented</h4>
                        <div className="line"></div> 
                        </Zoom>
                        </Col>


                        
                        
                     </Row>
                 </Col>

           

           

            </Row>
        </Container>
        </div>
   </Fragment>
  )
}

export default Summary
