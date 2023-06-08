import React from "react";
import "./ChampionCards.css";
import { Link, Route, Routes } from "react-router-dom";
import { ChampionView } from "../ChampionView/ChampionView";

export const ChampionCards = ({ championsData }) => {

	return (
		<div className='Champion__cards__container'>
			<ul className='cards'>
				{championsData.map((card) => {
					return (
						<li key={card.id} className='card'>
							<div className='cardana'>
								<Link
									to={`/${card.id.toLowerCase()}`}>
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
