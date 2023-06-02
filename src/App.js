import React from "react";
import "./App.css";
import { AllChampionsAPI } from "./LeagueAPI/AllChampionsAPI";


export const App = () => {
	return (
		<div className='App'>
			<AllChampionsAPI/>
		</div>
	);
};

export default App;
