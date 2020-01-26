import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import {Nav} from 'react-bootstrap';
import Subtitle from '../components/Subtitle/Subtitle';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Card, CardBody, Divider } from '../components/Card/Card';
import { Row, Col, Card as RBCard } from 'react-bootstrap/';
import {CardImg} from 'reactstrap';

import cards from '../utils/AssociationCard';

import '../App.css';
import AssociationCard from '../utils/AssociationCard';
import ProjectCard from '../utils/ProjectCard';



function Home(){
    const cardsNew = ["Hi", "sdfsdf","sdfsd","dsfsdf"];
    const cardsAssociation = AssociationCard(cardsNew);
    const cardsProject = ProjectCard(cardsNew);
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
                {cardsNew.map(i => (
                    <Card
                      className="scrolling-card"
                      style={{ maxWidth: '250px', maxHeight: '250px', display: 'inline-block' , marginLeft: '40px'}}
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
                <Subtitle text="Projects" />
                <Row
                    className="justify-content-center"
                    style={{ padding: '5px 25px' }}
                >
                {cardsNew.map(i => (
                    <Card
                      className="scrolling-card"
                      style={{ maxWidth: '250px', maxHeight: '250px', display: 'inline-block' , marginLeft: '40px'}}
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
                    {/* {cardsProject} */}
                </Row>

            <Footer/>
            </div>
        </div>
    );
}

export default Home;