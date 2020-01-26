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

function Association(){
    const cardsNew = [0, 1, 2, 3];
    const cardsAssociation = AssociationCard(cardsNew);
    return(
        <div>
            <Header
                title2 = "Profile"
                href='/'
            />
            <div className="background-section1">
                <Subtitle text="Associations" />
                <Row
                    className="justify-content-center"
                    style={{ padding: '5px 25px' }}
                >
                   {cardsAssociation}
                </Row>
                <Subtitle text="Projects" />
                <Row
                    className="justify-content-center"
                    style={{ padding: '5px 25px' }}
                >
                    {cardsAssociation}
                </Row>
            <Footer/>
            </div>
        </div>
    );
}

export default Association;