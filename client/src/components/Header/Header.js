import * as React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import {Nav} from 'react-bootstrap';

const Header = (props) => {
	const {
		title = '',
		title2 = '',
		title3 = '',
		subtitle = '',
		...rest
	} = props;
	return (
		<div className="AppHeader" {...rest}>
			<Nav.Link className="title" href='/Association'>{title}</Nav.Link>
			<Nav.Link className="title2" href='/'>{title2}</Nav.Link>
			<div className="title3">
				{title3}
			</div>
			<div className="subtitle">
				{subtitle}
			</div>

		</div>
	);
};

Header.propTypes = {
	title: PropTypes.string,
	title2: PropTypes.string,
	title3: PropTypes.string,
	subtitle: PropTypes.string
};

export default Header;
