import React, { useEffect, useState } from "react";
import { Spiner } from "../Spiner/Spiner";

export const SingleChampionAPI = (props) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		[...props.names].forEach((name) => {
			(async () => {
				try {
					setError(null);
					const res = await fetch(
						`http://ddragon.leagueoflegends.com/cdn/13.9.1/data/pl_PL/champion/${name}.json`
					);
					const resData = await res.json();

					const infoData = Object.values(resData.data)[0];
					//const gfdsfgdf = i tu zapisze kolejne dane jak wyżej itd.
					//const gfdsfgdf = i tu zapisze kolejne dane jak wyżej itd.
					//const gfdsfgdf = i tu zapisze kolejne dane jak wyżej itd.
					console.log(Object.values(resData.data)[0]);
					setData({
						champName: infoData.name,
						title: infoData.title,
						lore: infoData.lore,
						stats: infoData.stats,
						passiveSpell: infoData.passive,
						spells: infoData.spells,
						tags: infoData.tags,
						difficulty: infoData.info.difficulty,
						skinsArr:infoData.skins, //mapujemy
					});
				} catch (e) {
					setError(e);
				}
			})();
		});
	}, []);

	if (error) {
		return <p>{error}</p>;
	}

	if (data === null) {
		return <Spiner klasa="Loader"/>;
	}

	// console.log(data.spells);
	return (
		<>



			{/* <video
				src='https://www.leagueoflegends.com/static/what-is-league-of-legends-4e3d9714805dc82373c3a069ed9ec103.mp4'
				style={{ width: "min", height: "50vh" }}
				muted
				loop
				playsInline
				autoPlay></video> */}
		</>
	);
};
