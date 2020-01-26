
import React, { useState, useEffect } from 'react';
import { Card, CardBody, Divider } from '../components/Card/Card';
import { Row, Col, Card as RBCard } from 'react-bootstrap/';
import {CardImg} from 'reactstrap';

function AssociationCard(Object){

    var i = 0;
	var items = [];
    while(i<5){
        items.push(
                <Card
                    className="scrolling-card"
                    style={{ maxWidth: '250px', maxHeight: '250px', display: 'inline-block' , marginLeft: '40px', marginBottom: '40px'}}
                    >
                    <Col xs="10">
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
                        <CardImg top width="100%" src="https://dynomapper.com/images/Content_Audit_for_Website_Success.jpg"/>
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

export default AssociationCard;