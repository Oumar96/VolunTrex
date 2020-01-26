import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import {Nav} from 'react-bootstrap';
import { Card, CardBody, Divider } from '../components/Card/Card';
import {CardImg} from 'reactstrap';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import ReactFullpage from '@fullpage/react-fullpage';
import PropTypes from 'prop-types';
import { Row, Col, Card as RBCard } from 'react-bootstrap/';
import Subtitle from '../components/Subtitle/Subtitle';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import cards from '../utils/tools';

import '../App.css';



function Home(){
    const cardsNew = ["Hi", "sdfsdf","sdfsd","dsfsdf"];
    const cardsComponents = cards(cardsNew);
    console.log(cardsComponents);
    return(
        <div>
            <Header/>
            <div className="background-section1">
                <Subtitle text="Associations" />
                <Row
                    className="justify-content-center"
                    style={{ padding: '5px 25px' }}
                >
                    {cardsComponents}
                </Row>
                <p><Nav.Link href='/Association'>I volunteer</Nav.Link></p>
                <Subtitle text="Projects" />
                <Row
                    className="justify-content-center"
                    style={{ padding: '5px 25px' }}
                >
                    {cardsComponents}
                </Row>
                <p><Nav.Link href='/Project'>I volunteer</Nav.Link></p>

            <Footer/>
            </div>
        </div>
    );
}

export default Home;