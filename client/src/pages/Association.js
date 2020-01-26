import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import {Nav} from 'react-bootstrap';
import Subtitle from '../components/Subtitle/Subtitle';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Card, CardBody, Divider } from '../components/Card/Card';
import { Row, Col, Card as RBCard } from 'react-bootstrap/';
import {CardImg} from 'reactstrap';

import cards from '../utils/AssociationCard';

import '../App.css';
import {AssociationCard,ProjectsCards} from '../utils/AssociationCard';
import ProjectCard from '../utils/ProjectCard';

function Association(){
    const [allAssociations, setAllAssociations] = useState('Not available yet');
    const [allProjects, setAllProjects] = useState('Not available yet');
	const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {

        async function fetchData() {
            setIsLoading(true);
            await fetch('http://localhost:4000/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    query: `{
                        allAssociations{
                            association_name,
                            description
                        }
                        events{
                            event_id,
                            event_name,
                            description,
                            association_id,
                            total_volunteers,
                            activity_types,
                            picture,
                            days,
                            start_time,
                            end_time
                            }
                    }`
                })
            })
                .then((res) => res.json())
                .then((res) => {
                    (res.data.allAssociations && res.data.allAssociations.length !== 0) && setAllAssociations(res.data.allAssociations);
                    (res.data.events && res.data.events.length !== 0) && setAllProjects(res.data.events);
                    setIsLoading(false);
                });
            }
            fetchData();
        }, [allAssociations]);
    
    const cardsAssociation = AssociationCard(allAssociations);
    const cardsProjects = ProjectsCards(allProjects)
    return(
        <div>
            <Header
                title2 = "Profile"
                href='/'
            />
            <div className="background-section1">
                <Subtitle text="Associations" />
                <Row
                    className="justify-content-center"
                    style={{ padding: '5px 25px' }}
                >
                   {cardsAssociation}
                </Row>
                <Subtitle text="Projects" />
                <Row
                    className="justify-content-center"
                    style={{ padding: '5px 25px' }}
                >
                    {cardsProjects}
                </Row>
            <Footer
                challenge = "CGI Challenge"
                contributor1 = "Line Ghanem"
                contributor2 = "Steffan Venacious"
                contributor3 = "Oumar Ba"
            />
            </div>
        </div>
    );
}

export default Association;