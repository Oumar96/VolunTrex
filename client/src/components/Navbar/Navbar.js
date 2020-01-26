import * as React from 'react';
import { Navbar as RBNavbar, Nav as RBNav, Image} from 'react-bootstrap';
import './Navbar.css'

const Navbar = (props)=>{
    const{
        title=''
    } = props;

    return(
        <RBNavbar
				fixed="top"
				variant="dark"
				className="Navbar"
		>
             <RBNav.Link className="title" href='/' style={{ textDecoration: "none"}}>
                {title}
            </RBNav.Link>
            
            <RBNav.Link href="/" className='links'>logout</RBNav.Link>
        </RBNavbar>
    );


}

export default Navbar;