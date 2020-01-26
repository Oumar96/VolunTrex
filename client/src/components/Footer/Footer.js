import * as React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

const Footer = (props) => {
	const {
		challenge = '',
		contributor1 = '',
		contributor2 = '',
		contributor3 = '',
		...rest
	} = props;
	return (
		<div className="AppFooter" {...rest}>
			<div className="challenge">
				{challenge}
			</div>
			<div className="contributor1">
				{contributor1}
			</div>
			<div className="contributor2">
				{contributor2}
			</div>
			<div className="contributor3">
				{contributor3}
			</div>

		</div>
	);
};

Footer.propTypes = {
	challenge: PropTypes.string,
	contributor1: PropTypes.string,
	contributor2: PropTypes.string,
	contributor3: PropTypes.string,
	contributor3: PropTypes.string
};

export default Footer;
