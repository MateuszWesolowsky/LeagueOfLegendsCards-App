import React, { useState } from "react";

import "./OneChampionCard.css";

export const OneChampionCard = ({ singleChampionInfo }) => {
	const [visibleText, setVisibleText] = useState(true);

	const checkMore = () => {
		setVisibleText(false);
	};

	return (
		<>
			<div className='Champion__container'>
				<div className='Img__container'>
					<img
						className='Blur__img'
						src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${singleChampionInfo.id}_0.jpg`}
						alt={`Champion - ${singleChampionInfo.id}`}
					/>
					<img
						className='Main__img'
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
			</div>
		</>
	);
};
