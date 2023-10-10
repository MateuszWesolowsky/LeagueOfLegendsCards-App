import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Spells } from "../Components/OneChampionCardViews/Spells/Spells";

const mockChampionInfo = {
	name: "Test Champion",
	passive: {
		name: "Test Passive",
		image: {
			full: "test-passive-image.png",
		},
	},
	spells: [
		{
			id: "1",
			name: "Spell 1",
		},
		{
			id: "2",
			name: "Spell 2",
		},
	],
};

describe("Spells component", () => {
	test("renders Spells component", () => {
		render(<Spells singleChampionInfo={mockChampionInfo} />);

		expect(screen.getByText("Umiejętności")).toBeInTheDocument();
	});
	test("clicking on a spell changes the active spell", () => {
		render(<Spells singleChampionInfo={mockChampionInfo} />);

		expect(screen.getByAltText("Passive spell - Test Champion")).toHaveClass(
			"shadow-img"
		);
	});
	test("changes active spell when a spell image is clicked", () => {
		render(<Spells singleChampionInfo={mockChampionInfo} />);

		const spell1Image = screen.getByTestId("spell-1");
		console.log(spell1Image);
		fireEvent.click(spell1Image);

		expect(spell1Image).toHaveClass("shadow-img");
	});
});
