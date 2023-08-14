import React, { useEffect, useState } from "react";

export const useFetchChampions = () => {
	const [championsInfo, setChampionsInfo] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const API_URL =
		"https://ddragon.leagueoflegends.com/cdn/13.10.1/data/pl_PL/champion.json?fbclid=IwAR2uigR4_Y3l3x1wHR_0-hQvF9Zd9shgJsTMyVzDMQ-0aRjVxmUpA7mOt8s";

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			try {
				setError(null);
				const res = await fetch(API_URL);
				const data = await res.json();
				setChampionsInfo({
					championID: Object.values(data.data).map((elemet) => elemet.id),
				});
				setIsLoading(false);
			} catch (e) {
				setError("Loading data error..");
				setIsLoading(false);
			}
		})();
	}, []);

	return {
		championsInfo,
		error,
		isLoading,
	};
};
