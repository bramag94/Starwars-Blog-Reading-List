import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<div className="d-flex flex-column">
			<div>
				<h1>Star Wars</h1>
			</div>
			<span />
			<div className="d-flex justify-content-center">
				<div>
					<Link to="/planets">
						<h1>Planetas</h1>
						<img
							width={300}
							height={200}
							src="https://icons.iconarchive.com/icons/artua/star-wars/256/Death-Star-icon.png"
							alt="Planets"
							border-radius="5"
						/>
					</Link>
				</div>
				<span> </span>
				<div>
					<Link to="/characters">
						<h1>Personajes</h1>
						<img
							width={300}
							height={200}
							src="https://lh3.googleusercontent.com/proxy/mmCGzpt0hDAwHhqfrGHnRqBRLH_JuQtSC1ta0FxWu4cactocATMYo_PBLPTOf1BqLuL6_7fP6P1siyCJS6cPgZwm2o63VGAc0FUxvJE7AL2R9-VcdkJ8R39q890fYzc"
							alt="Baby Yoda"
							border-radius="5"
						/>
					</Link>
				</div>
			</div>
		</div>
	</div>
);
