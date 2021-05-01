import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Cardplanetas } from "../component/cardplanetas";

export const Planets = () => {
	const { store } = useContext(Context);
	console.log("data", store.planets);
	return (
		<div className="container text-center mt-5 ">
			<div className="text-white">
				<h1>PLANETS</h1>
			</div>
			<div className>
				<div className="card-deck">
					{store.planets.map((item, index) => {
						return (
							<div key={index} className="col-md-4 mb-3">
								<Cardplanetas
									name={item.name}
									diameter={item.diameter}
									climate={item.climate}
									index={index}
								/>
								;
							</div>
						);
					})}
				</div>
			</div>

			<Link to="/">
				<button className="btn btn-primary">Ir a home</button>
			</Link>
		</div>
	);
};
