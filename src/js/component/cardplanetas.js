import React from "react";
import PropTypes from "prop-types";

export const Cardplanetas = props => {
	return (
		<div className="card" style={{ width: "18rem;" }}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title"> {props.name} </h5>
				<p className="card-text"> {props.diameter}</p>
				<p className="card-text"> {props.climate}</p>{" "}
			</div>
		</div>
	);
};

Cardplanetas.propTypes = {
	name: PropTypes.string,
	diameter: PropTypes.number,
	climate: PropTypes.string
};
