import React, { useEffect, useState } from "react";

export const SingleChampionAPI = (props) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		[...props.names].forEach((name) => {
			(async () => {
				try {
					setError(null);
					const res = await fetch(
						`http://ddragon.leagueoflegends.com/cdn/13.9.1/data/en_US/champion/${name}.json`
					);
					const resData = await res.json();

					const infoData = Object.values(resData.data)[0];
					//const gfdsfgdf = i tu zapisze kolejne dane jak wyżej itd.
					//const gfdsfgdf = i tu zapisze kolejne dane jak wyżej itd.
					//const gfdsfgdf = i tu zapisze kolejne dane jak wyżej itd.
					console.log(infoData);
					setData({
						champName: infoData.name,
						lore: infoData.lore,
					});
				} catch (e) {
					setError("Loading data error..");
				}
			})();
		});
	}, []);
    
	if (error) {
		return <p>{error}</p>;
	}

	if (data === null) {
		return <p>Wczytywanie</p>;
	}
	return (
		<>
			<div></div>
		</>
	);
};
