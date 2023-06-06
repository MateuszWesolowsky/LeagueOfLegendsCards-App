import React from "react";
import "./App.css";
import { AllChampionsAPI } from "./LeagueAPI/AllChampionsAPI";
import { Header } from "./Header/Header";
import { Navigation } from "./Navigation/Navigation";
import { ChampionCards } from "./ChampionCards/ChampionCards";

export const App = () => {
	return (
		<div className='App'>
			<Header />
			<Navigation />
			<ChampionCards />
			<AllChampionsAPI/>
		</div>
	);
};

export default App;
