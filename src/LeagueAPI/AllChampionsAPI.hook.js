import { useEffect, useState } from "react";

export const useFetchChampions = (link) => {
	const [championsInfo, setChampionsInfo] = useState([]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				setIsLoading(true);
				setError("");
				const res = await fetch(link);
				const data = await res.json();
				setChampionsInfo(Object.values(data.data));
			} catch (e) {
				setError("Loading data error..");
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
