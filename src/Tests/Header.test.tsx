import { render, screen } from "@testing-library/react";
import { Header } from "../Components/Header/Header";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

describe("Header component", () => {
	test("renders Header component", () => {
		render(<Header />);

		const headerElement = screen.getByText("CZYM JEST LEAGUE OF LEGENDS?");
		expect(headerElement).toBeInTheDocument();
	});

	test("scrolls to section when button is clicked", () => {
		render(<Header />);

		const button = screen.getByText("Poznaj bohaterów");

		const section = screen.getByTestId("header-title");

		const scrollIntoViewMock = jest.fn();
		Element.prototype.scrollIntoView = scrollIntoViewMock;

		userEvent.click(button);

		expect(section.scrollIntoView).toHaveBeenCalledWith({
			behavior: "smooth",
		});
	});
});
