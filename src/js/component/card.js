import React from "react";
import PropTypes from "prop-types";
import Charactersdetails from "./characterdetails";
import { Link } from "react-router-dom";

export const Card = props => {
	return (
		<div className="card" style={{ width: "18rem;" }}>
			<img
				src="https://www.rockandpop.cl/wp-content/uploads/2020/11/1d9c8486ccb4519d85cd5ee92ea77ef5.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title"> {props.name}</h5>
				<p className="card-text"> Hair color: {props.hair}</p>
				<p className="card-text"> Eyes color: {props.eyes}</p>
				<Link to={"/character/details/" + props.index}>
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
