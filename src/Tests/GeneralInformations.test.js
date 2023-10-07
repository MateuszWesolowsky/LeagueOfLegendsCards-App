import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { GeneralInformations } from "../Components/OneChampionCardViews/GeneralInformations/GeneralInformations";
import { MemoryRouter } from "react-router-dom";

const championInfo = {
	id: "exampleId",
	title: "Example Title",
	name: "Example Name",
	tags: ["Example Tag"],
	info: {
		difficulty: 3,
	},
	blurb: "Example Blurb",
	lore: "Example Lore",
};

describe("GeneralInformations Component", () => {
	test("renders champion information correctly", () => {
		render(
			<MemoryRouter>
				<GeneralInformations singleChampionInfo={championInfo} />
			</MemoryRouter>
		);

		expect(screen.getByText("Example Title")).toBeInTheDocument();
		expect(screen.getByText("Example Name")).toBeInTheDocument();
		expect(screen.getByText("Rola")).toBeInTheDocument();
		expect(screen.getByText("Example Tag")).toBeInTheDocument();
		expect(screen.getByText("Poziom trudności")).toBeInTheDocument();
		expect(screen.getByText("3")).toBeInTheDocument();
		expect(screen.getByText("Example Blurb")).toBeInTheDocument();
	});

	test("hides full lore initially and shows it after 'zobacz więcej' button is clicked", () => {
		render(
			<MemoryRouter>
				<GeneralInformations singleChampionInfo={championInfo} />
			</MemoryRouter>
		);

		expect(screen.queryByText("Example Lore")).not.toBeInTheDocument();

		fireEvent.click(screen.getByText("zobacz więcej"));

		expect(screen.getByText("Example Lore")).toBeInTheDocument();
	});
});
