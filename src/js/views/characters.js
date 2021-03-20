import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = () => {
	const { store } = useContext(Context);
	console.log("data", store.peoples);
	return (
		<div className="text-center mt-5">
			<h1>Personajes</h1>
			<Link to="/">
				<botton className="btn btn-primary">Ir a home</botton>
			</Link>
		</div>
	);
};
