import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Planetdetails = () => {
	const { store } = useContext(Context);
	const paramid02 = useParams();
	console.log(store.planets);

	return (
		<div className="card" style={{ width: "18rem;" }}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title"> {this.props.name} </h5>
				<p className="card-text"> {this.props.diameter}</p>
				<p className="card-text"> {this.props.climate}</p>{" "}
				<Link to={"/planetdetails/" + props.index}>
					<button className="btn btn-primary">Ver más</button>
				</Link>
			</div>
		</div>
	);
};

Planetdetails.propTypes = {
	name: PropTypes.string,
	diameter: PropTypes.string,
	climate: PropTypes.string,
	index: PropTypes.number
};
