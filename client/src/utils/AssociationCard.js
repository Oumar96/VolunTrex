
import React, { useState, useEffect } from 'react';
import { Card, CardBody, Divider, JobCardBody } from '../components/Card/Card';
import { Row, Col, Card as RBCard } from 'react-bootstrap/';
import { Button, ButtonToolbar} from 'reactstrap';
import {CardImg} from 'reactstrap';
import { Link } from 'react-router-dom';
var event = "";

function AssociationCard(Object){

    var i = 0;
	var items = [];
    while(i<Object.length){
        items.push(
                <Card
                    className="scrolling-card"
                    style={{ maxWidth: '400px', maxHeight: '400px', display: 'inline-block' , marginLeft: '40px', marginBottom: '60px'}}
                    >
                    <Col xs="10">
                    <CardBody
                        title={Object[i].association_name}
                        className="scrolling-card"
                        style={{ paddingTop: '10px', textAlign: 'Center'}}
                    >
                        <Row className="justify-content-center"
					        style={{ padding: '0px 0px' }}>
                                {/* <Link type="submit"
                                    className="tablinks"
                                    to={`/Association?clickedCard=${Object[i].association_id}&attribute=Home`}>Home</Link>
                                <Link type="submit"
                                    className="tablinks"
                                    to={`/Association?clickedCard=${Object[i].association_id}&attribute=Description`}>Description</Link>
                                 <Link type="submit"
                                    className="tablinks"
                                    to={`/Association?clickedCard=${Object[i].association_id}&attribute=Projects`}>Projects</Link> */}
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
                                <CardImg top width="100%" src="https://dynomapper.com/images/Content_Audit_for_Website_Success.jpg"/>
                                <p style={{textAlign: 'center'}}>{Object[i].description}</p>

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

function ProjectsCards(Object){

    var i = 0;
	var items = [];
    while(i<Object.length){
        items.push(
                <Card
                    className="scrolling-card"
                    style={{ maxWidth: '350px', maxHeight: '450px', display: 'inline-block' , marginLeft: '40px', marginBottom: '60px'}}
                    >
                    <Col xs="10">
                    <CardBody
                        title={Object[i].event_name}
                        className="scrolling-card"
                        style={{ paddingTop: '10px', textAlign: 'Center'}}
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
                                <CardImg top width="100%" src={Object[i].picture}/>
                        <p style={{textAlign: 'center'}}>{Object[i].description}</p>
                        <p style={{textAlign: 'center'}}>Type: {Object[i].activity_types}</p>


                                    <Button 
                                    type="button"
                                    className="buttonAccept"
                                    >
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




function addEvent(){
        async function fetchData() {
            await fetch('http://localhost:4000/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    query: `{
                        myAssociations(user_id:"1"){
                            association_name,
                            description
                        }
                        volunteers(user_id:"1"){
                            event_id,
                            event_name,
                            description,
                            total_volunteers,
                            activity_types
                          }
                    }`
                })
            });
        }
}

export {AssociationCard,ProjectsCards};