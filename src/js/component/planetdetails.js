import React, { useContext } from "react";
import { Link } from "react-router-dom";

export const Planetdetails = () => {
	return (
		<div>
			<div>
				<Link to="/planets">
					<button className="btn btn-primary">Ir a Planetas</button>
				</Link>
			</div>
		</div>
	);
};
