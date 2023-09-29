import { useState, useEffect } from "react";
import ChampionInfo from "../../types/type";

export const useFetchChampions = (link: string) => {
	const [championsInfo, setChampionsInfo] = useState<ChampionInfo[]>([]);
	const [error, setError] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		(async () => {
			try {
				setIsLoading(true);
				setError("");
				const res = await fetch(link);
				const data = await res.json();
				setChampionsInfo(Object.values(data.data) as ChampionInfo[]);
			} catch (e) {
				setError("Wystąpił błąd podczas ładowania danych..");
			} finally {
				setIsLoading(false);
			}
		})();
	}, [link]);

	return {
		championsInfo,
		error,
		isLoading,
	};
};
