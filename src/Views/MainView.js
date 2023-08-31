import React, { useState } from "react";
import { AllChampionsAPI } from "../LeagueAPI/AllChampionsAPI";
import { Navigation } from "../Navigation/Navigation.tsx";
import { Header } from "../Header/Header";
import { useFetchChampions } from "../LeagueAPI/AllChampionsAPI.hook";

// const filterKeys = {
// 	Zabójcy: "Assassin",
// 	Wojownicy: "Fighter",
// 	Magowie: "Mage",
// 	Strzelcy: "Marksmen",
// 	Wspierający: "Support",
// 	Obrońcy: "Tank",
// };

const API_URL =
	"https://ddragon.leagueoflegends.com/cdn/13.7.1/data/pl_PL/champion.json";
export const MainView = () => {
	const { championsInfo, error, isLoading } = useFetchChampions(API_URL);

	const [selectedCategory, setSelectedCategory] = useState("Wszystkie");

	const handleSelectCategory = (category) => {
		console.log(category);
		setSelectedCategory(category);
	};

	const filteredChampions = championsInfo.filter((champion) =>
		selectedCategory === "Wszystkie"
			? true
			: champion.tags.includes(selectedCategory)
	);

	return (
		<>
			<Header />
			<Navigation onSelectCategory={handleSelectCategory} />
			<AllChampionsAPI
				championsInfo={filteredChampions}
				error={error}
				isLoading={isLoading}
			/>
		</>
	);
};
