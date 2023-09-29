import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner";
import { GeneralInformations } from "../OneChampionCardViews/GeneralInformations/GeneralInformations";
import { Spells } from "../OneChampionCardViews/Spells/Spells";
import { Skins } from "../OneChampionCardViews/Skins/Skins";
import { useFetchChampions } from "../Hooks/useFetchChampions";
import ChampionInfo from "../../types/type";

export const SingleChampionView: React.FC = () => {
	const { championId } = useParams<{ championId: string }>();

	const API = `https://ddragon.leagueoflegends.com/cdn/13.17.1/data/pl_PL/champion/${championId}.json`;

	const { championsInfo, error, isLoading } = useFetchChampions(API);

	const championData: ChampionInfo | undefined = championsInfo[0];

	useEffect(() => {
		document.title = `Champion | ${championId}`;
		return () => {
			document.title = "League of Legends App";
		};
	}, [championId]);

	if (error) {
		return <p>{error}</p>;
	}
	if (isLoading || !championData) {
		return <Spinner className='loader' />;
	}

	return (
		<>
			<GeneralInformations singleChampionInfo={championData} />
			<Spells singleChampionInfo={championData} />
			<Skins singleChampionInfo={championData} />
		</>
	);
};
