import React, { useState } from "react";
import "./Spells.css";

export const Spells = ({ singleChampionInfo }) => {
	const [isActive, setIsActive] = useState(false);

	// const spellsContainer = singleChampionInfo.map(spell =>
	// 	(
	// 		<>

	// 		</>
	// 	)
	// );

	return (
		<div className='Spells'>
			<div className='Spells__container'>
				<h2 className='Spells__h2'>Umiejętności</h2>
				<div className='Spells'>
					<div className='Spells__passive'>
						<img
							src={`https://ddragon.leagueoflegends.com/cdn/13.12.1/img/passive/${singleChampionInfo.passive.image.full}`}
							alt={`Passive spell - ${singleChampionInfo.name}`}
						/>
						<div className='Passive__description'>
							<span>Umiejętoność Bierna</span>
							<span className='Name__span'>
								{singleChampionInfo.passive.name}
							</span>
							<span className='Description__span'>
								{singleChampionInfo.passive.description
									.replaceAll("<", "")
									.replaceAll(">", "")
									.replaceAll("/", "")}
							</span>
						</div>
					</div>
				</div>
				<div className='Spells__description'></div>
			</div>
		</div>
	);
};
