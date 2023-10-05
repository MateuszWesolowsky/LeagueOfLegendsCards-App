import React, { useState } from "react";
import { Navigation } from "../Components/Navigation/Navigation";
import { Header } from "../Components/Header/Header";
import { ChampionsList } from "../Components/ChamapionsList/ChampionsList";
import { useFetchChampions } from "../Hooks/useFetchChampions";
import ChampionInfo from "../types/type";

const API_URL =
	"https://ddragon.leagueoflegends.com/cdn/13.17.1/data/pl_PL/champion.json";

export const MainView: React.FC = () => {
	const { championsInfo, error, isLoading } = useFetchChampions(API_URL);
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [query, setQuery] = useState("");
	const [level, setLevel] = useState("Wszystkie poziomy trudności");

	const handleSelectCategory = (category: string) => {
		setSelectedCategory(category);
		setQuery("");
	};

	let filteredChampions: ChampionInfo[] = championsInfo;

	if (selectedCategory !== "All") {
		filteredChampions = championsInfo.filter((champion) =>
			champion.tags.includes(selectedCategory)
		);
	}

	if (query !== "") {
		filteredChampions = filteredChampions.filter((champion) =>
			champion.id.toLowerCase().includes(query.toLowerCase())
		);
	}

	filteredChampions = filteredChampions.filter((champion) => {
		if (level === "Łatwy") {
			return champion.info.difficulty < 4;
		} else if (level === "Średni") {
			return champion.info.difficulty >= 4 && champion.info.difficulty < 7;
		} else if (level === "Trudny") {
			return champion.info.difficulty >= 7;
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
