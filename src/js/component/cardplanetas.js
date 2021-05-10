import React, { useContext, useParams, useState } from "react";
import PropTypes from "prop-types";
import planetsdetails from "./planetdetails";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Cardplanetas = props => {
	return (
		<div className="container colorbg">
			<div className="card" style={{ width: "18rem;" }}>
				<img
					src="https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg?region=0%2C31%2C1600%2C800"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title"> {props.name} </h5>
					<p className="card-text"> Diameter: {props.diameter}</p>
					<p className="card-text"> Climate: {props.climate}</p>{" "}
					<Link to={"/planet/details/" + props.index}>
						<button className="btn btn-primary">Ver más</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

Cardplanetas.propTypes = {
	name: PropTypes.string,
	diameter: PropTypes.string,
	climate: PropTypes.string,
	index: PropTypes.number
};
