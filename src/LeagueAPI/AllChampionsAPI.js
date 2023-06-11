import React, { useEffect, useState } from "react";
import { Spiner } from "../Spiner/Spiner";
import { SingleChampionAPI } from "./SingleChampionAPI";

export const AllChampionsAPI = () => {
	const [championsInfo, setChampionsInfo] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		(async () => {
			try {
				setError(null);
				const res = await fetch(
					"http://ddragon.leagueoflegends.com/cdn/13.10.1/data/pl_PL/champion.json?fbclid=IwAR2uigR4_Y3l3x1wHR_0-hQvF9Zd9shgJsTMyVzDMQ-0aRjVxmUpA7mOt8s"
				);
				const data = await res.json();

				setChampionsInfo({
					championID: Object.values(data.data).map((elemet) => elemet.id),
				});
			} catch (e) {
				setError("Loading data error..");
			}
		})();
	}, []);
	if (error) {
		return <p>{error}</p>;
	}

	if (championsInfo === null) {
		return <Spiner />;
	}

	return <SingleChampionAPI championNames={championsInfo.championID} />;
};
