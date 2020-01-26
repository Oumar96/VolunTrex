import * as React from 'react';
import { Card, CardBody, Divider } from '../components/Card/Card';
import { Row, Col, Card as RBCard } from 'react-bootstrap/';
import {CardImg} from 'reactstrap';

function getAssociations(Object){
    console.log(Object)
    console.log(Object.length)
    var length = Object.length;
    var i = 0;
	var items = [];
    while(i<length){
        items.push(
            <Col xs="10" sm="4">
                <Card
                    className="scrolling-card"
                    style={{ maxWidth: '350px', maxHeight: '350px' }}
                    >
                    <CardBody
                        className="scrolling-card"
                        style={{ paddingTop: '10px' }}
                    >
                        <h3 style={{textAlign: 'center'}}>{Object[i].association_name}</h3>
                        <CardImg top width="100%" src="https://dynomapper.com/images/Content_Audit_for_Website_Success.jpg"/>
                        <p style={{textAlign: 'center'}}>{Object[i].description}</p>
                    </CardBody>
                </Card>
            </Col>
        );
        i++;
    }
    return (
		<div>
			{items}
        </div>)
}

function getProjects(Object){
    console.log(Object)
    console.log(Object.length)
    var length = Object.length;
    var i = 0;
	var items = [];
    while(i<length){
        items.push(
            <Col xs="10" sm="4">
                <Card
                    className="scrolling-card"
                    style={{ maxWidth: '350px', maxHeight: '350px' }}
                    >
                    <CardBody
                        className="scrolling-card"
                        style={{ paddingTop: '10px' }}
                    >
                        <h3 style={{textAlign: 'center'}}>{Object[i].event_name}</h3>
                        <CardImg top width="100%" src="https://dynomapper.com/images/Content_Audit_for_Website_Success.jpg"/>
                        <p style={{textAlign: 'center'}}>{Object[i].description}</p>
                        <p style={{textAlign: 'center'}}>{Object[i].activity_types}</p>
                        <p style={{textAlign: 'center'}}>{Object[i].total_volunteers}</p>
                    </CardBody>
                </Card>
            </Col>
        );
        i++;
    }
    return (
		<div>
			{items}
        </div>)
}

export  {getAssociations,getProjects};