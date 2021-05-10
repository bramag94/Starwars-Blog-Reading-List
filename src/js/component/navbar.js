import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar border border-white p-3 mb-2  text-white d-flex justify-content-between nabvarcus rounded">
			<a className="navbar-brand" href="#" />
			<img
				src="https://icons-for-free.com/iconfiles/png/512/r2d2+robot+starwars+icon-1320166698566079188.png"
				height="60"
				alt=""
			/>
			<Link to="/">
				<span className="navbar-brand mb-0 h1 text-white">Home</span>
			</Link>
			<div className="navbar-brand text-white imgNav">
				<img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-emblema.jpg" alt="" height="60" />
			</div>
			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="btn btn-dark dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<Link to="/myfavorites">
							<a className="dropdown-item" href="#">
								Go to favorites
							</a>
						</Link>
						<a className="dropdown-item" href="#">
							Another action
						</a>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
