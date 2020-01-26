
import React, { useState, useEffect } from 'react';
import { Card, CardBody, Divider, JobCardBody } from '../components/Card/Card';
import { Row, Col, Card as RBCard } from 'react-bootstrap/';
import { Button, ButtonToolbar} from 'reactstrap';
import {CardImg} from 'reactstrap';

function AssociationCard(Object){

    var i = 0;
	var items = [];
    while(i<Object.length){
        items.push(
                <Card
                    className="scrolling-card"
                    style={{ maxWidth: '250px', maxHeight: '250px', display: 'inline-block' , marginLeft: '40px', marginBottom: '60px'}}
                    >
                    <Col xs="10">
                    <CardBody
                        title={Object[i].event_name}
                        className="scrolling-card"
                        style={{ paddingTop: '10px' }}
                    >
                        <Row className="justify-content-center"
					        style={{ padding: '0px 0px' }}>
                                <button
						            type="button"
                                    className="tablinks"
                                    onClick ={Object[i].association_name}
					                >Association
					            </button>
                                <button
						            type="button"
						            className="tablinks"
                                    onClick ={Object[i].description}
					                >Description
					            </button>
                                <button
						            type="button"
						            className="tablinks"
                                    onClick ={Object[i].picture}
					                >Projects
					            </button>
                                <CardImg top width="100%" src="https://dynomapper.com/images/Content_Audit_for_Website_Success.jpg"/>

                                    <Button 
                                    type="button"
                                    className="buttonAccept">
                                        Approve
                                    </Button>
                                    <Button 
                                    type="button"
                                    className="buttonDecline ">
                                        Decline
                                    </Button>


                        </Row>
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