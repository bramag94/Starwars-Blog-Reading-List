import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Cardplanetas } from "../component/cardplanetas";

export const Planets = () => {
	const { store } = useContext(Context);
	console.log("data", store.planets);
	return (
		<div classNameName="text-center mt-5">
			<h1>Planets</h1>

			<div className="container">
				<ul className="list-group">
					{store.planets.map((item, index) => {
						return (
							<div key={index}>
								<Cardplanetas name={item.name} diameter={item.diameter} climate={item.climate} />;
							</div>
						);
					})}

					<Link to="/">
						<button className="btn btn-primary">Ir a home</button>
					</Link>
				</ul>
			</div>
		</div>
	);
};
