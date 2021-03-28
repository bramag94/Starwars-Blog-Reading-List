import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planetdetails = () => {
	const { store } = useContext(Context);
	const paramid02 = useParams();
	console.log(store.planets);
	return <div>Detalles</div>;
};
