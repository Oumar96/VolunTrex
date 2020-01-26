
import React, { useState, useEffect } from 'react';
import { Card, CardBody, Divider } from '../components/Card/Card';
import { Row, Col, Card as RBCard } from 'react-bootstrap/';
import {CardImg} from 'reactstrap';

function AssociationCard(Object){

    var i = 0;
	var items = [];
    while(i<5){
        items.push(
            <Col xs="10" sm="4">
                <Card
                    className="scrolling-card"
                    style={{ maxWidth: '300px', maxHeight: '350px' }}
                    >
                    <CardBody
                        className="scrolling-card"
                        style={{ paddingTop: '10px' }}
                    >
                        <Row className="justify-content-center"
					        style={{ padding: '0px 0px' }}>
                                <button
						            type="button"
                                    className="tablinks"

					                >Association
					            </button>
                                <button
						            type="button"
						            className="tablinks"
					                >Description
					            </button>
                                <button
						            type="button"
						            className="tablinks"
					                >Projects
					            </button>
                </Row>

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

export default AssociationCard;