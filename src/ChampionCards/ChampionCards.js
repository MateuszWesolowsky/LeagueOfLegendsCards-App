import React from "react";
import "./ChampionCards.css";
import { Link } from "react-router-dom";

export const ChampionCards = ({ championsData }) => {
	return (
		<div className='Champion__cards__container'>
			<ul className='cards'>
				{championsData.map((card) => {
					return (
						<li key={card.id} className='card'>
							<div className='Champ__img__container'>
								<Link to={`/${card.id}`}>
									<img
										src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${card.id}_0.jpg`}
										alt={`Champion picture - ${card.name}`}
									/>
								</Link>
								{card.name}
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
