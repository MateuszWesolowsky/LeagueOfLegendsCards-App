import React, { useEffect, useState } from "react";
import { Spinner } from "../Spinner/Spinner";
import { ChampionCards } from "../ChampionCards/ChampionCards";

export const SingleChampionAPI = ({championsID}) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setError(null);
				const championData = [];
				// Replaced the forEach loop with a for of loop to use await inside.
				for (const championID of championsID) {
					const res = await fetch(
						`http://ddragon.leagueoflegends.com/cdn/13.9.1/data/pl_PL/champion/${championID}.json`
					);
					const resData = await res.json();

					const infoData = Object.values(resData.data)[0];
					championData.push(infoData);
				}
				setData(championData);
			} catch (e) {
				setError(e);
			}
		};

		fetchData();
	}, [championsID]);

	if (error) {
		return <p>{error}</p>;
	}

	if (data.length === 0) {
		return;
	}

	return <ChampionCards championsData={data} />;
};
