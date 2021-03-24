import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light p-3 mb-2 bg-secondary text-white">
			<a className="navbar-brand" href="#" />
			<img
				src="https://icons-for-free.com/iconfiles/png/512/r2d2+robot+starwars+icon-1320166698566079188.png"
				height="60"
				alt=""
			/>
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button type="button" className="btn btn-light">
						Favs
					</button>
				</Link>
			</div>
		</nav>
	);
};
