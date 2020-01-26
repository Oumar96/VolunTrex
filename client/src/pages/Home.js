import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import {Nav} from 'react-bootstrap';
import Subtitle from '../components/Subtitle/Subtitle';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Card, CardBody, Divider } from '../components/Card/Card';
import { Row, Col, Card as RBCard } from 'react-bootstrap/';
import {CardImg} from 'reactstrap';

// import cards from '../utils/tools';

import '../App.css';



function Home(){
    return(
        <div>
            <Header
              title='VolunTrex'
            />
            <div className="background-section1">
                <Subtitle text="Associations" />
                <Row
                    className="justify-content-center"
                    style={{ padding: '5px 25px' }}
                >
                {[0,1,2,3,4].map(i => (
                    <Card
                      className="scrolling-card"
                      style={{ maxWidth: '250px', maxHeight: '250px', display: 'inline-block' }}
                      display = {{}}
                     >
                     <Col xs="4">
                    <CardBody
                      className="scrolling-card"
                      style={{ paddingTop: '10px' }}
                      >
                      <CardImg top width="100%" src="https://dynomapper.com/images/Content_Audit_for_Website_Success.jpg"/>
                      <p>Testing</p>
                    </CardBody>
                    </Col>
                    </Card>
                ))}
                </Row>
                <p><Nav.Link href='/Association'>I volunteer</Nav.Link></p>
                <Subtitle text="Projects" />
                <Row
                    className="justify-content-center"
                    style={{ padding: '5px 25px' }}
                >
                {[0,1,2,3,4].map(i => (
                    <Card
                      className="scrolling-card"
                      style={{ maxWidth: '250px', maxHeight: '250px', display: 'inline-block' }}
                      display = {{}}
                     >
                     <Col xs="4">
                    <CardBody
                      className="scrolling-card"
                      style={{ paddingTop: '10px' }}
                      >
                      <CardImg top width="100%" src="https://dynomapper.com/images/Content_Audit_for_Website_Success.jpg"/>
                      <p>Testing</p>
                    </CardBody>
                    </Col>
                    </Card>
                ))}
                </Row>
                <p><Nav.Link href='/Project'>I volunteer</Nav.Link></p>

            <Footer/>
            </div>
        </div>
    );
}

export default Home;