import React from "react";
import "./Header/Header.css";

export const Header = () => {
	return (
		<header>
			<div className='Header__img'></div>
			<div className='Header__title'>
				<h1>
					Wybierz swojego <span>Bohatera</span>
				</h1>
				<p className='Title__Description'>
					Mając do wyboru ponad 140 bohaterów, z pewnością znajdziesz kogoś dla
					siebie. Do perfekcji opanuj któregoś z nich — albo wszystkich.
				</p>
			</div>
		</header>
	);
};
