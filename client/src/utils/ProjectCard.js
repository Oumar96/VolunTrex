import * as React from 'react';
import { Card, CardBody, Divider } from '../components/Card/Card';
import { Row, Col, Card as RBCard } from 'react-bootstrap/';
import {CardImg} from 'reactstrap';


function getAssociationCards(Object){
    var i = 0;
	var items = [];
    while(i<Object.length){
        items.push(
            <Card
                className="scrolling-card"
                style={{ maxWidth: '400px', maxHeight: '400px', display: 'inline-block' , marginLeft: '40px', marginBottom: '40px'}}
                >
                <Col xs="10">
                    <CardBody
                        title={Object[i].association_name}
                        className="scrolling-card"
                        style={{ paddingTop: '10px', textAlign: 'Center'}}
                    >
                        <CardImg top width="100%" src="https://dynomapper.com/images/Content_Audit_for_Website_Success.jpg"/>
                        <p style={{textAlign: 'center'}}>{Object[i].description}</p>
                    </CardBody>
                </Col>
            </Card>
        );
        i++;
    }
    return (
		<div>
			{items}
        </div>)
}

function getProjectCards(Object){
    var i = 0;
	var items = [];
    while(i<Object.length){
        items.push(
            <Card
                className="scrolling-card"
                style={{ maxWidth: '350px', maxHeight: '450px', display: 'inline-block' , marginLeft: '40px', marginBottom: '40px'}}
                >
                <Col xs="10">
                    <CardBody
                        title={Object[i].event_name}
                        className="scrolling-card"
                        style={{ paddingTop: '10px', textAlign: 'Center'}}
                    >
                        <CardImg top width="100%" src={Object[i].picture}/>
                        <p style={{textAlign: 'center'}}>{Object[i].description}</p>
                        <p style={{textAlign: 'center'}}>Volunteers: {Object[i].total_volunteers}</p>
                        <p style={{textAlign: 'center'}}>Type: {Object[i].activity_types}</p>
                    </CardBody>
                </Col>
            </Card>
        );
        i++;
    }
    return (
		<div>
			{items}
        </div>)
}

export {getAssociationCards,getProjectCards};