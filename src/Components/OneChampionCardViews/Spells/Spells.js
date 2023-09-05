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
		<div className='spells-container'>
			<h2>Umiejętności</h2>
			<div className='spells-img'>
				<img
					onClick={() => chosedSpell(singleChampionInfo.passive.name)}
					className={`${
						activeSpellName === singleChampionInfo.passive.name
							? "shadow-img"
							: ""
					}`}
					src={`https://ddragon.leagueoflegends.com/cdn/13.17.1/img/passive/${singleChampionInfo.passive.image.full}`}
					alt={`Passive spell - ${singleChampionInfo.name}`}
				/>
				{singleChampionInfo.spells.map((spell) => (
					<img
						className={`${
							activeSpellName === spell.name ? "shadow-img" : ""
						}`}
						onClick={() => chosedSpell(spell.name)}
						key={spell.id}
						src={`https://ddragon.leagueoflegends.com/cdn/13.17.1/img/spell/${spell.id}.png`}
						alt={`${activeSpellName} spell - ${singleChampionInfo.name}`}
					/>
				))}
			</div>
			<div className='spells-description-container'>
				<h2 className='spell-name'>
					{activeSpellName === singleChampionInfo.passive.name
						? singleChampionInfo.passive.name
						: singleChampionInfo.spells.find(
								(spellName) => spellName.name === activeSpellName
						  ).name}
				</h2>
				<span className='spell-description'>
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
	);
};
