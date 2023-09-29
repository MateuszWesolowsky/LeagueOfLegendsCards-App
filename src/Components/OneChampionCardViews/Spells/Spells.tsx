import React, { useState } from "react";
import "./Spells.css";
import ChampionInfo from "../../../types/type";

interface SpellsProps {
	singleChampionInfo: ChampionInfo;
}

export const Spells: React.FC<SpellsProps> = ({ singleChampionInfo }) => {
	const [activeSpellName, setActiveSpellName] = useState(
		singleChampionInfo.passive.name
	);
	const chooseSpell = (name: string) => {
		setActiveSpellName(name);
	};

	return (
		<div className='spells-container'>
			<h2>Umiejętności</h2>
			<div className='spells-img'>
				<img
					onClick={() => chooseSpell(singleChampionInfo.passive.name)}
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
						className={`${activeSpellName === spell.name ? "shadow-img" : ""}`}
						onClick={() => chooseSpell(spell.name)}
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
								(spell) => spell.name === activeSpellName
						  )?.name}
				</h2>
				<span className='spell-description'>
					{activeSpellName === singleChampionInfo.passive.name
						? singleChampionInfo.passive.description
						: singleChampionInfo.spells.find(
								(spell) => spell.name === activeSpellName
						  )?.description}
				</span>
			</div>
		</div>
	);
};
