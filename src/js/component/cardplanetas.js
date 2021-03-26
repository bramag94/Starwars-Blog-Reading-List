import React from "react";
import PropTypes from "prop-types";
import planetsdetails from "./planetdetails";
import { Link } from "react-router-dom";

export const Cardplanetas = props => {
	return (
		<div className="card" style={{ width: "18rem;" }}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title"> {props.name} </h5>
				<p className="card-text"> {props.diameter}</p>
				<p className="card-text"> {props.climate}</p>{" "}
				<Link to={"/planetdetails/" + props.index}>
					<button className="btn btn-primary">Ver más</button>
				</Link>
			</div>
		</div>
	);
};

Cardplanetas.propTypes = {
	name: PropTypes.string,
	diameter: PropTypes.number,
	climate: PropTypes.string,
	index: PropTypes.number
};
