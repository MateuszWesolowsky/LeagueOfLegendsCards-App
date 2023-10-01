import { render, screen } from "@testing-library/react";
import { Header } from "../Components/Header/Header";
import "@testing-library/jest-dom/extend-expect";

test("renders Header component", () => {
	render(<Header />);

	const headerElement = screen.getByText("CZYM JEST LEAGUE OF LEGENDS?");
	expect(headerElement).toBeInTheDocument();
});
