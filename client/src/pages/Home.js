import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import {Nav} from 'react-bootstrap';
import { Card, CardBody, Divider } from '../components/Card/Card';
import {CardImg} from 'reactstrap';
import ReactFullpage from '@fullpage/react-fullpage';
import PropTypes from 'prop-types';
import { Row, Col, Card as RBCard } from 'react-bootstrap/';
import Subtitle from '../components/Subtitle/Subtitle';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import {getAssociations,getProjects} from '../utils/tools';

import '../App.css';


function Home(){
    const [associations, setAssociations] = useState('Not available yet');
    const [projects, setProjects] = useState('Not available yet');
	const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {

        async function fetchData() {
            setIsLoading(true);
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
            })
                .then((res) => res.json())
                .then((res) => {
                    (res.data.myAssociations && res.data.myAssociations.length !== 0) && setAssociations(res.data.myAssociations);
                    (res.data.volunteers && res.data.volunteers.length !== 0) && setProjects(res.data.volunteers);
                    setIsLoading(false);
                });
            }
            fetchData();
        }, [associations]);

    const associationsList = associations;
    const projectsList = projects;
    // console.log(associationsList);
    const cardsNew = ["Hi", "sdfsdf","sdfsd","dsfsdf"];
    const associationsComponents = getAssociations(associationsList);
    const projectComponents = getProjects(projectsList);
    return(
        <div>
            <Header/>
            <div className="background-section1">
                <Subtitle text="Associations" />
                <Row
                    className="justify-content-center"
                    style={{ padding: '5px 25px' }}
                >
                    {associationsComponents}
                </Row>
                <p><Nav.Link href='/Association'>I volunteer</Nav.Link></p>
                <Subtitle text="Projects" />
                <Row
                    className="justify-content-center"
                    style={{ padding: '5px 25px' }}
                >
                    {projectComponents}
                </Row>
                <p><Nav.Link href='/Project'>I volunteer</Nav.Link></p>

            <Footer/>
            </div>
        </div>
    );
}

export default Home;