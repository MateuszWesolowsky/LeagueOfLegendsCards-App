import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { SingleChampionView } from "./Views/SingleChampionView";
import { NotFoundView } from "./Views/NotFoundView";
import { MainView } from "./Views/MainView";

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
