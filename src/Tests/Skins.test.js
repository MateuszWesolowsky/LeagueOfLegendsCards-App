import { render, screen, fireEvent } from "@testing-library/react";
import { Skins } from "../Components/OneChampionCardViews/Skins/Skins";
import "@testing-library/jest-dom/extend-expect";

const mockChampionInfo = {
	id: "exampleId",
	name: "Example Champion",
	skins: [
		{ num: 1, name: "Skin 1" },
		{ num: 2, name: "Skin 2" },
		{ num: 3, name: "Skin 3" },
	],
};

describe("Skins Component", () => {
	test("Skins component renders correctly", () => {
		render(<Skins singleChampionInfo={mockChampionInfo} />);

		expect(screen.getByText("Dostępne skórki")).toBeInTheDocument();
	});

	test("goes to the next skin when the right arrow is clicked", () => {
		render(<Skins singleChampionInfo={mockChampionInfo} />);

		const rightArrow = screen.getByText("⇨");
		fireEvent.click(rightArrow);

		const skinName = screen.getByText("Skin 2");
		expect(skinName).toBeInTheDocument();
	});

	test("goes to the previous skin when the left arrow is clicked", () => {
		render(<Skins singleChampionInfo={mockChampionInfo} />);

		const leftArrow = screen.getByText("⇦");
		fireEvent.click(leftArrow);

		const skinName = screen.getByText("Skin 3");
		expect(skinName).toBeInTheDocument();
	});
});
