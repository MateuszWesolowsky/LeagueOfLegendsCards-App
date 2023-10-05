import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ChampionsList } from "../Components/ChamapionsList/ChampionsList";
import { MemoryRouter } from "react-router-dom";

describe("ChampionsList component", () => {
	const championsInfo = [{ name: "Champion 1" }, { name: "Champion 2" }];

	test("should render champions when isLoading is false and error is null", () => {
		render(
			<MemoryRouter>
				<ChampionsList
					championsInfo={championsInfo}
					isLoading={false}
					error={null}
					query=''
				/>
			</MemoryRouter>
		);

		championsInfo.forEach((champion) => {
			const championName = screen.getByText(champion.name);
			expect(championName).toBeInTheDocument();
		});
	});

	test("renders error message when error is not null", () => {
		render(<ChampionsList error='Error message' />);

		const errorMessageElement = screen.getByText("Error message");
		expect(errorMessageElement).toBeInTheDocument();
	});

	test("renders loading spinner when isLoading is true", () => {
		render(<ChampionsList isLoading={true} />);
		const spinner = screen.getByTestId("loader-test");
		expect(spinner).toBeInTheDocument();
	});

	test("renders 'NOT FOUND' message when championsInfo is empty", () => {
		render(<ChampionsList championsInfo={[]} isLoading={false} />);

		const notFoundMessage = screen.getByText("Champion not found...");
		expect(notFoundMessage).toBeInTheDocument();
	});
});
