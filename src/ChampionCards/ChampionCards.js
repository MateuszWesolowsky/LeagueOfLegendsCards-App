import React from "react";
import "./ChampionCards.css";
import { Link } from "react-router-dom";

export const ChampionCards = ({ championsData }) => {
	return (
		<div className='Champion__cards__container'>
			<ul className='Cards'>
				{championsData.map((card) => {
					return (
						<li key={card.id} className='One__card'>
							<div className='Champ__img__container'>
								<div className='OneChamp__card'>
									<Link to={`/${card.id}`}>
										<img
											src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${card.id}_0.jpg`}
											alt={`Champion picture - ${card.name}`}
										/>
									
									<span>{card.name}</span>
									</Link>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
