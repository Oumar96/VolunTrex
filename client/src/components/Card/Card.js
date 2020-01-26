import * as React from 'react';
import PropTypes from 'prop-types';
import { Card as RBCard } from 'react-bootstrap';
import './Card.css';


const Card = (props) => {
	const { header = '', footer = '', children, ...rest } = props;
	return (
		<RBCard style={{ width: '18rem' }}>
		<RBCard.Img variant="top" className="cardImage" src="https://dynomapper.com/images/Content_Audit_for_Website_Success.jpg" />
		<RBCard.Body>
			<RBCard.Title>Card Title</RBCard.Title>
			<RBCard.Text>
			Some quick example text to build on the card title and make up the bulk of
			the card's content.
			</RBCard.Text>
		</RBCard.Body>
		</RBCard>
	);
};

const CardBody = (props) => {
	const { children, title = '', subtitle = '', ...rest } = props;
	return (
		<RBCard.Body
			{...rest}
			className="TScardBody"
		>
			{title && <RBCard.Title>{title}</RBCard.Title>}
			{subtitle && (
				<RBCard.Subtitle className="mb-2 text-muted">
					{subtitle}
				</RBCard.Subtitle>
			)}
			<RBCard.Text>{children}</RBCard.Text>
		</RBCard.Body>
	);
};

const Divider = () => {
	return <hr className="cardDivider" />;
};

Card.propTypes = {
	header: PropTypes.string,
	footer: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string
};

export { Card, CardBody, Divider };
