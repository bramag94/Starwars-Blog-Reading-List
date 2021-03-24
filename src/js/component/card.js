import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card" style={{ width: "18rem;" }}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title"> {props.name}</h5>
				<p className="card-text"> {props.hair}</p>
				<p className="card-text"> {props.eyes}</p>
			</div>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string,
	eyes: PropTypes.string,
	hair: PropTypes.string
};
