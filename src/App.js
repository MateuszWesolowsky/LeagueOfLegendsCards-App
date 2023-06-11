import React from "react";
import "./App.css";
import { AllChampionsAPI } from "./LeagueAPI/AllChampionsAPI";
import { Header } from "./Header/Header";
import { Navigation } from "./Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import { ChampionView } from "./ChampionView/ChampionView";

export const App = () => {
	return (
		<>
			<Header />
			<Navigation />
			<AllChampionsAPI />
			<Routes>
				<Route path={`/$`} element={<ChampionView />} />
			</Routes>

		</>
	);
};

export default App;
