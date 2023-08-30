import React, { useState } from "react";
import { AllChampionsAPI } from "../LeagueAPI/AllChampionsAPI";
import { Navigation } from "../Navigation/Navigation.tsx";
import { Header } from "../Header/Header";
import { useFetchChampions } from "../LeagueAPI/AllChampionsAPI.hook";

// const data = [
// 	"Wszystkie",
// 	"Zabójcy",
// 	"Wojownicy",
// 	"Magowie",
// 	"Strzelcy",
// 	"Wspierający",
// 	"Obrońcy",
// ];
// const dataToFilter = ["Assassin", "Fighter", "Mage", "Marksmen", "Support", "Tank"]

const API_URL =
	"https://ddragon.leagueoflegends.com/cdn/13.7.1/data/pl_PL/champion.json";
export const MainView = () => {
	const { championsInfo, setChampionsInfo, error, isLoading } = useFetchChampions(API_URL);
	

	const handleSelectCategory = (category) => {
		if(category === "Wszystkie") {
			setChampionsInfo(championsInfo => championsInfo.filter(champ => champ.tags))
		}
		if(category === "Zabójcy") {
			setChampionsInfo(championsInfo => championsInfo.filter(champ => champ.tags.includes("Assassin")))
		}
		if(category === "Wojownicy") {
			setChampionsInfo(championsInfo => championsInfo.filter(champ => champ.tags.includes("Fighter")))
		}
		if(category === "Magowie") {
			setChampionsInfo(championsInfo => championsInfo.filter(champ => champ.tags.includes("Mage")))
		}
		if(category === "Strzelcy") {
			setChampionsInfo(championsInfo => championsInfo.filter(champ => champ.tags.includes("Marksmen")))
		}
		if(category === "Wspierający") {
			setChampionsInfo(championsInfo => championsInfo.filter(champ => champ.tags.includes("Support")))
		}
		if(category === "Obrońcy") {
			setChampionsInfo(championsInfo => championsInfo.filter(champ => champ.tags.includes("Tank")))
		}

		
	}

	
	return (
		<>
			<Header />
			<Navigation onSelectCategory={handleSelectCategory}/>
			<AllChampionsAPI championsInfo={championsInfo} error={error} isLoading={isLoading}/>
		</>
	);
};
