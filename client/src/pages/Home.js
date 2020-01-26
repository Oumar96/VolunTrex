import * as React from 'react';
import Navbar from '../components/Navbar/Navbar';
import {Nav} from 'react-bootstrap';
import { Card, CardBody, Divider } from '../components/Card/Card';
import {CardImg} from 'reactstrap';
import ReactFullpage from '@fullpage/react-fullpage';
import { Row, Col, Card as RBCard } from 'react-bootstrap/';
import Subtitle from '../components/Subtitle/Subtitle';
import Header from '../components/Header/Header';

import '../App.css';



function Home(){
    return(
        <div>
            <Header
                title="Title 1"
                title2="Title 2"
                title3="Title 3"
            />
            <div className="background-section1">
                <Subtitle text="Associations" />
                <Row
                    className="justify-content-center"
                    style={{ padding: '5px 25px' }}
                >
                    <Col xs="10" sm="4">
                        <Card
                            className="scrolling-card"
                            style={{ maxWidth: '250px', maxHeight: '250px' }}
                            >
                            <CardBody
                                className="scrolling-card"
                                style={{ paddingTop: '10px' }}
                            >
                                <CardImg top width="100%" src="https://dynomapper.com/images/Content_Audit_for_Website_Success.jpg"/>
                                <p>Testing</p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <p><Nav.Link href='/Association'>I volunteer</Nav.Link></p>
            </div>
            <div className="background-section2">
                <Subtitle text="Projects" />
                <p><Nav.Link href='/Project'>I volunteer</Nav.Link></p>
            </div>
        </div>
    );
}

export default Home;