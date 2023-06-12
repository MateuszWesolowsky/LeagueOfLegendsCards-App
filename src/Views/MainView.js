import React from "react";
import { AllChampionsAPI } from "../LeagueAPI/AllChampionsAPI";
import { Navigation } from "../Navigation/Navigation";
import { Header } from "../Header/Header";

//dodac drugi komponent czyli nav i wtedy jeden renderujemy glowny

export const MainView = () => {
	return (
		<>
			<Header />
			<Navigation />
			<AllChampionsAPI />
		</>
	);
};
