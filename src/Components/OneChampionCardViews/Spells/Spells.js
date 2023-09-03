import React, { useState } from "react";
import "./Spells.css";

export const Spells = ({ singleChampionInfo }) => {
	const [activeSpellName, setactiveSpellName] = useState(
		singleChampionInfo.passive.name
	);

	const chosedSpell = (name) => {
		setactiveSpellName(name);
	};

	return (
		<div className='Spells__container'>
			<h2 className='Spells__h2'>Umiejętności</h2>

			<div className='Spells'>
				<div className='Spells__img__container'>
					<img
						onClick={() => chosedSpell(singleChampionInfo.passive.name)}
						src={`https://ddragon.leagueoflegends.com/cdn/13.17.1/img/passive/${singleChampionInfo.passive.image.full}`}
						alt={`Passive spell - ${singleChampionInfo.name}`}
					/>
					{singleChampionInfo.spells.map((spell) => (
						<img
							onClick={() => chosedSpell(spell.name)}
							key={spell.id}
							src={`https://ddragon.leagueoflegends.com/cdn/13.17.1/img/spell/${spell.id}.png`}
							alt={`Passive spell - ${singleChampionInfo.name}`}
						/>
					))}
				</div>
				<div className='Spells__description__container'>
					<span className='Spells__names'>
						{activeSpellName === singleChampionInfo.passive.name
							? singleChampionInfo.passive.name
							: singleChampionInfo.spells.find(
									(spellName) => spellName.name === activeSpellName
							  ).name}
					</span>
					<span className='Spells__description'>
						{activeSpellName === singleChampionInfo.passive.name
							? singleChampionInfo.passive.description
									.replaceAll("<", "")
									.replaceAll(">", "")
									.replaceAll("/", "")
							: singleChampionInfo.spells
									.find((spellName) => spellName.name === activeSpellName)
									.description.replaceAll("<", "")
									.replaceAll(">", "")
									.replaceAll("/", "")}
					</span>
				</div>
			</div>
		</div>
	);
};
