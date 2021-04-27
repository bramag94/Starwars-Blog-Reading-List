import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { PropTypes } from "prop-types";

export const Planetdetails = props => {
	const { store } = useContext(Context);
	const { id02 } = useParams();
	console.log(id02);

	const [planets, Planetdetails] = React.useState([]);

	return (
		<div className="container">
			<div className="card" style={{ width: "18rem" }}>
				<img
					src="https://static2.abc.es/media/201201/19/Star_Wars--644x450.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title"> Nombre: {props.name} </h5>
					<p className="card-text"> Diámero {props.diameter}</p>
					<p className="card-text"> Tipo de clima: {props.climate}</p>{" "}
					<Link to={"/planets"}>
						<button className="btn btn-primary">Ir atrás</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

Planetdetails.propTypes = {
	name: PropTypes.string,
	diameter: PropTypes.number,
	climate: PropTypes.string,
	index: PropTypes.number
};
