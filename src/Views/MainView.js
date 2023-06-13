import React from "react";
import { AllChampionsAPI } from "../LeagueAPI/AllChampionsAPI";
import { Navigation } from "../Navigation/Navigation";
import { Header } from "../Header/Header";



export const MainView = () => {
	return (
		<>
			<Header />
			<Navigation />
			<AllChampionsAPI />
		</>
	);
};
