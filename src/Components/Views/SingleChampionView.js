import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner";
import { GeneralInformations } from "../OneChampionCardViews/GeneralInformations/GeneralInformations.tsx";
import { Spells } from "../OneChampionCardViews/Spells/Spells.tsx";
import { Skins } from "../OneChampionCardViews/Skins/Skins";
import { useFetchChampions } from "../Hooks/useFetchChampions";

export const SingleChampionView = () => {
	const { championId } = useParams();

	const API = `https://ddragon.leagueoflegends.com/cdn/13.17.1/data/pl_PL/champion/${championId}.json`;

	const { championsInfo, error, isLoading } = useFetchChampions(API);

	let championData = championsInfo[0];

	useEffect(() => {
		document.title = `Champion | ${championId}`;
		return () => {
			document.title = "League of Legends App";
		};
	}, [championId]);

	if (error) {
		return <p>{error}</p>;
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
