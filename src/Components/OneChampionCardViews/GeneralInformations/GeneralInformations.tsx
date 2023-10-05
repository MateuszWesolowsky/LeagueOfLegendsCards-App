import React, { useState } from "react";
import "./GeneralInformations.css";
import { Link } from "react-router-dom";
import { useScreenDetector } from "../../../Hooks/useScreenDetector";

interface Props {
	singleChampionInfo: {
		id: string;
		title: string;
		name: string;
		tags: string[];
		info: {
			difficulty: number;
		};
		blurb: string;
		lore: string;
	};
}

export const GeneralInformations = ({
	singleChampionInfo,
}: Props): JSX.Element => {
	const [visibleText, setVisibleText] = useState<boolean>(true);
	const { isMobile } = useScreenDetector();
	const checkMore = (): void => {
		setVisibleText(false);
	};

	return (
		<>
			<div className='imgs-container'>
				<Link className='back-btn' to={`/`}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					Lista Bohaterów
				</Link>
				<img
					className='blur-img'
					src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${singleChampionInfo.id}_0.jpg`}
					alt={`Champion - ${singleChampionInfo.id}`}
				/>
				<img
					className='main-img'
					src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${singleChampionInfo.id}_0.jpg`}
					alt={`Champion - ${singleChampionInfo.id}`}
				/>
				<div className='champion-title-container'>
					<span>{singleChampionInfo.title}</span>
					<h2>{singleChampionInfo.name}</h2>
				</div>
			</div>
			<div className='champion-description-container'>
				<div className='left-container'>
					<div className='role'>
						<span>Rola</span>
						<span>{singleChampionInfo.tags[0]}</span>
					</div>
					{isMobile && <span className='border'></span>}
					<div className='level'>
						<span>Poziom trudności</span>
						<span>{singleChampionInfo.info.difficulty}</span>
					</div>
				</div>
				<div className='right-container'>
					{visibleText && (
						<p>
							{singleChampionInfo.blurb}
							<button onClick={checkMore}>zobacz więcej</button>
						</p>
					)}
					{!visibleText && <p>{singleChampionInfo.lore}</p>}
				</div>
			</div>
		</>
	);
};
