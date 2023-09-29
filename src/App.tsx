import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { SingleChampionView } from "./Components/Views/SingleChampionView";
import { NotFoundView } from "./Components/Views/NotFoundView";
import { MainView } from "./Components/Views/MainView";

export const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<MainView />} />
				<Route path={`/:championId`} element={<SingleChampionView />} />
				<Route path='*' element={<NotFoundView />} />
			</Routes>
		</>
	);
};

export default App;
