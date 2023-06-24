import React from "react";

import "./OneChampionCard.css";
import { GeneralInformations } from "../OneChampionCardViews/GeneralInformations";
import { Spells } from "../OneChampionCardViews/Spells";
import { Skins } from "../OneChampionCardViews/Skins";

export const OneChampionCard = ({ singleChampionInfo }) => {
	return (
		<>
			<div className='Champion__container'>
				<GeneralInformations singleChampionInfo={singleChampionInfo} />
				<Spells singleChampionInfo={singleChampionInfo} />
				<Skins singleChampionInfo={singleChampionInfo}/>
			</div>
		</>
	);
};
