import * as React from 'react';
import Navbar from '../components/Navbar/Navbar';
import {Nav} from 'react-bootstrap';
import { Card, CardBody, Divider } from '../components/Card/Card';
import { Row, Col, Card as RBCard } from 'react-bootstrap/';


function Home(){
    return(
        <div>
            <Navbar title='VolunTrex'/>
            <div>
                <h3>your associations</h3>
                <Col xs="10" sm="4">
                    <Card
                        className="scrolling-card"
                        header="Advisory"
                        style={{ maxHeight: '400px', overflow: 'scroll' }}
                    >
                        <CardBody>
                            <div
                                className="scrolling-card"
                                dangerouslySetInnerHTML={{ __html: "advisoryInf" }}
                            />
                        </CardBody>
                    </Card>
                </Col>
                <p><Nav.Link href='/Association'>I volunteer</Nav.Link></p>
            </div>
            <div>
                <h3>your projects</h3>
                <p><Nav.Link href='/Project'>I volunteer</Nav.Link></p>
            </div>
        </div>
    );
}

export default Home;