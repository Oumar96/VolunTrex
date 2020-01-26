
import React, { useState, useEffect } from 'react';
import { Card, CardBody, Divider, JobCardBody } from '../components/Card/Card';
import { Row, Col, Card as RBCard } from 'react-bootstrap/';
import { Button, ButtonToolbar} from 'reactstrap';
import {CardImg} from 'reactstrap';



const  AssociationCard =(props)=>{


        async function addVolunteering() {

            await fetch('http://localhost:4000/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    mutation: `{
                        addVolunteering(user_id:"1", event_id:"350") {
                            user_id,
                            event_id
                        }
                    }`
                })
            })
                .then((res) => res.json())
            };

    const{
        cardsAssociation
    }=props;
    const [responce,setResponce] = useState('accepted');
    var i = 0;
    var items = [];
    while(i<cardsAssociation.length){
        items.push(
                <Card
                    className="scrolling-card"
                    style={{ maxWidth: '400px', maxHeight: '400px', display: 'inline-block' , marginLeft: '40px', marginBottom: '60px'}}
                    >
                    <Col xs="10">
                    <CardBody
                        title={cardsAssociation[i].association_name}
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
                                <CardImg top width="100%" src="https://dynomapper.com/images/Content_Audit_for_Website_Success.jpg"/>
                                <p style={{textAlign: 'center'}}>{cardsAssociation[i].description}</p>

                                    <Button
                                    type="button"
                                    className="buttonAccept"
                                    onClick={()=>{addVolunteering();
                                    setResponce("okey");}}>
                                        {responce}
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
        </div>);
};

const ProjectsCards = (Object)=>{

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
        </div>);
};

export {AssociationCard, ProjectsCards};