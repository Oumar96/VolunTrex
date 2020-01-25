import * as React from 'react';
import Navbar from '../components/Navbar/Navbar';
import {Nav} from 'react-bootstrap';


function Home(){
    return(
        <div>
            <Navbar title='VolunTrex'/>
            <div>
                <h3>your associations</h3>
                <p><Nav.Link href='/Association'>I volunteer</Nav.Link></p>
            </div>
            <div>
                <h3>your projects</h3>
                <p><Nav.Link href='/Project'>I volunteer</Nav.Link></p>
            </div>
        </div>
    );
}

export default Home;