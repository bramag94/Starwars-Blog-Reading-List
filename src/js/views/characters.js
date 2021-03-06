import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Characters = () => {
	const { store } = useContext(Context);
	console.log("data", store.peoples);
	return (
		<div className="container text-center mt-5">
			<div className="text-white">
				<h1>CHARACTERS</h1>
			</div>
			<div className="card-deck">
				{store.peoples.map((item, index) => {
					return (
						<div key={index} className="col-md-4 mb-3">
							<Card name={item.name} hair={item.hair_color} eyes={item.eye_color} index={index} />;
						</div>
					);
				})}
			</div>
			<Link to="/">
				<button className="btn btn-primary">Ir a home</button>
			</Link>
		</div>
	);
};
