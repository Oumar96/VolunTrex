import * as React from 'react';
import { Navbar as RBNavbar, Nav as RBNav} from 'react-bootstrap';
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
            <RBNavbar.Text className="title">
						{title}
			</RBNavbar.Text>

            <RBNav.Link href="/" className='links'>Components</RBNav.Link>

        </RBNavbar>
    );


}

export default Navbar;