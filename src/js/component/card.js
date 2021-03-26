import React from "react";
import PropTypes from "prop-types";
import Characterdetails from "./characterdetails";
import { Link } from "react-router-dom";

export const Card = props => {
	return (
		<div className="card" style={{ width: "18rem;" }}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title"> {props.name}</h5>
				<p className="card-text"> {props.hair}</p>
				<p className="card-text"> {props.eyes}</p>
				<Link to={"/charactersdetails/" + props.index}>
					<button className="btn btn-primary">Ver más</button>
				</Link>
			</div>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string,
	eyes: PropTypes.string,
	hair: PropTypes.string,
	index: PropTypes.number
};
