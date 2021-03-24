import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Characters = () => {
	const { store } = useContext(Context);
	console.log("data", store.peoples);
	return (
		<div className="text-center mt-5">
			<h1>Personajes</h1>

			<div className="container">
				<ul className="list-group">
					{store.peoples.map((item, index) => {
						return (
							<div key={index}>
								<Card name={item.name} hair={item.hair_color} eyes={item.eyes_color} />;
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
