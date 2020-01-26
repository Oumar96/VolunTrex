import * as React from 'react';
import Navbar from '../components/Navbar/Navbar';
import {Nav} from 'react-bootstrap';
import { Card, CardBody, Divider } from '../components/Card/Card';
import {CardImg} from 'reactstrap';
import ReactFullpage from '@fullpage/react-fullpage';
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