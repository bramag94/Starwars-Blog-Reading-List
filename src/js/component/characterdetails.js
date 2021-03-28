import React, { useContext } from "react";
import { Link, UseParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Charactersdetails = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div />
			<div>
				<Link to="/characters">
					<button className="btn btn-primary">Ir a personajes</button>
				</Link>
			</div>
		</div>
	);
};
