import React, { useState } from "react";
import { ChampionsList } from "../ChamapionsList/ChampionsList";
import { Navigation } from "../Navigation/Navigation.tsx";
import { Header } from "../Header/Header";
import { useFetchChampions } from "../Hooks/useFetchChampions";

const API_URL =
	"https://ddragon.leagueoflegends.com/cdn/13.17.1/data/pl_PL/champion.json";
export const MainView = () => {
	const { championsInfo, error, isLoading } = useFetchChampions(API_URL);
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [query, setQuery] = useState("");
	const [level, setLevel] = useState("Wszystkie poziomy trudości");

	const handleSelectCategory = (category) => {
		setSelectedCategory(category);
		setQuery("");
	};

	let filteredChampions;

	filteredChampions = championsInfo.filter((champion) =>
		selectedCategory === "All"
			? champion
			: champion.tags.includes(selectedCategory)
	);

	filteredChampions = filteredChampions.filter((champion) =>
		champion.id.toLowerCase().includes(query)
	);

	filteredChampions = filteredChampions.filter((champion) => {
		if (level === "Łatwy") {
			return champion.info.difficulty < 4;
		} else if (level === "Średni") {
			return champion.info.difficulty > 4 && champion.info.difficulty < 7;
		} else if (level === "Trudny") {
			return champion.info.difficulty > 7;
		}
		return true;
	});

	return (
		<>
			<Header />
			<Navigation
				onSelectCategory={handleSelectCategory}
				selectedCategory={selectedCategory}
				query={query}
				setQuery={setQuery}
				level={level}
				setLevel={setLevel}
			/>
			<ChampionsList
				championsInfo={filteredChampions}
				error={error}
				isLoading={isLoading}
				query={query}
			/>
		</>
	);
};
