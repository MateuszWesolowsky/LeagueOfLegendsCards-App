import React from "react";
import { SingleChampionHeader } from "../Header/SingleChampionHeader";
import "./OneChampionCard.css";

export const OneChampionCard = ({ singleChampionInfo }) => {
	return (
		<>
			<SingleChampionHeader />
			<div className='Champion__container'>
                <h2>Poznaj swojego bohatera</h2>

				<img
					src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${singleChampionInfo.id}_0.jpg`}
					alt=''
				/>
			</div>
		</>
	);
};
