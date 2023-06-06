import React from "react";


export const ChampionCards = ({ championsData }) => {
	if (!championsData) {
		return ;
	}



	return (
		<div className='Champion__cards__container'>
			<ul>
				{championsData.map((card) => {
					return <li key={card.id}>{card.name}</li>;
				})}
			</ul>
		</div>
	);
};



