import React from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner";
import { GeneralInformations } from "../OneChampionCardViews/GeneralInformations/GeneralInformations.tsx";
import { Spells } from "../OneChampionCardViews/Spells/Spells";
import { Skins } from "../OneChampionCardViews/Skins/Skins";
import { useFetchChampions } from "../Hooks/FetchChampions.hook";
import { NotFoundView } from "./NotFoundView";

export const SingleChampionView = () => {
	const { championId } = useParams();

	const API = `http://ddragon.leagueoflegends.com/cdn/13.9.1/data/pl_PL/champion/${championId}.json`;

	const { championsInfo, error, isLoading } = useFetchChampions(API);

	let championData = championsInfo[0];

	if (error) {
		return <NotFoundView />;
	}
	if (isLoading) {
		return <Spinner className='loader' />;
	}

	return (
		championData && (
			<>
				<GeneralInformations singleChampionInfo={championData} />
				<Spells singleChampionInfo={championData} />
				<Skins singleChampionInfo={championData} />
			</>
		)
	);
};
