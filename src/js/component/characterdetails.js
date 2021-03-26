import React, { useContext } from "react";
import { Link } from "react-router-dom";

export const Charactersdetails = () => {
	return (
		<div>
			<div>
				<Link to="/characters">
					<button className="btn btn-primary">Ir a personajes</button>
				</Link>
			</div>
		</div>
	);
};
