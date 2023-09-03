import React, { useState } from "react";
import "./GeneralInformations.css";
import { Link } from "react-router-dom";

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
console.log(singleChampionInfo)
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
				<div className='Champion__title__container'>
					<span>{singleChampionInfo.title}</span>
					<h2>{singleChampionInfo.name}</h2>
				</div>
			</div>
			<div className='Champion__description__container'>
				<div className='Left__info__container'>
					<div className='Role__container'>
						<span>Rola</span>
						<span>{singleChampionInfo.tags[0]}</span>
					</div>
					<div className='Difficulty__level__container'>
						<span>Poziom trudności</span>
						<span>{singleChampionInfo.info.difficulty}</span>
					</div>
				</div>
				<div className='Right__info__container'>
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
