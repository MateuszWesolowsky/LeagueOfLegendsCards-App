import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner";
import { NotFoundView } from "./NotFoundView";
import { OneChampionCard } from "../ChampionCards/OneChampionCard";

export const SingleChampionView = () => {
	const [championInfo, setChampionInfo] = useState(null);
	const [error, setError] = useState(null);
	const { championId } = useParams();

	useEffect(() => {
		(async () => {
			try {
				setError(null);
				const res = await fetch(
					`http://ddragon.leagueoflegends.com/cdn/13.9.1/data/pl_PL/champion/${championId}.json`
				);
				const resData = await res.json();
				setChampionInfo(Object.values(resData.data)[0]);
			} catch (e) {
				setError(e);
			}
		})();
	}, [championId]);

	console.log(championInfo);
	if (error) {
		return <NotFoundView />;
	}

	if (championInfo === null) {
		return <Spinner className={`loader`}/>
	}

	return <OneChampionCard singleChampionInfo={championInfo} />;
};
