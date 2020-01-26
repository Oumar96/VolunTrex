import * as React from 'react';
import { Card, CardBody, Divider } from '../components/Card/Card';
import { Row, Col, Card as RBCard } from 'react-bootstrap/';
import {CardImg} from 'reactstrap';

function cards(Object){
    var i = 0;
	var items = [];
    while(i<5){
        items.push(
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
        );
        i++;
    }
    return (
		<div>
			{items}
        </div>)
}

export default cards;