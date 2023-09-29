interface Spell {
	id: string;
	name: string;
	description: string;
}
interface PassiveAbility {
	name: string;
	description: string;
	image: {
		full: string;
	};
}

interface ChampionInfo {
	id: string;
	title: string;
	name: string;
	tags: string[];
	info: {
		difficulty: number;
	};
	blurb: string;
	lore: string;
	passive: PassiveAbility;
	spells: Spell[];
	skins: {
		num: number;
		name: string;
		passive: PassiveAbility;
	}[];
}

export default ChampionInfo;
