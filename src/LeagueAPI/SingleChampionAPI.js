import React, { useEffect, useState } from "react";
import { Spiner } from "../Spiner/Spiner";
import { ChampionCards } from "../ChampionCards/ChampionCards";

export const SingleChampionAPI = (props) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
  
	useEffect(() => {
	  const fetchData = async () => {
		try {
		  setError(null);
		  const championData = [];
		  // Replaced the forEach loop with a for of loop to use await inside the loop.
		  for (const championName of props.championNames) {
			const res = await fetch(
			  `http://ddragon.leagueoflegends.com/cdn/13.9.1/data/pl_PL/champion/${championName}.json`
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
	}, []);
  

	if (error) {
	  return <p>{error}</p>;
	}
  
	if (data.length === 0) {
	  return <Spiner className='Loader' />;
	}
  
	return <ChampionCards championsData={data}/>;
  };