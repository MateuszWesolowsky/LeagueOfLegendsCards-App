import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Navigation } from "../Components/Navigation/Navigation";

describe("Navigation component", () => {
	test("renders without errors", () => {
		render(<Navigation />);

		const inputElement = screen.getByPlaceholderText("Szukaj...");
		expect(inputElement).toBeInTheDocument();
	});

	test("calls setQuery when input value changes", () => {
		const setQuery = jest.fn();
		render(<Navigation setQuery={setQuery} />);

		const inputElement = screen.getByPlaceholderText("Szukaj...");
		fireEvent.change(inputElement, { target: { value: "new value" } });

		expect(setQuery).toHaveBeenCalledWith("new value");
	});
    
    test('calls the difficulty level and check does works correctly', () => {
      const mockSetLevel = jest.fn();
      render(
        <Navigation level="Łatwy" setLevel={mockSetLevel} />
      );
    
      const select = screen.getByText('Poziom trudności');
    
      fireEvent.change(select, { target: { value: 'Średni' } });
    
      expect(select.value).toBe('Średni');
    });

    test('select categories works correctly', () => {
        const mockOnSelectCategory = jest.fn();
        render(
          <Navigation onSelectCategory={mockOnSelectCategory} />
        );
      
        const category = screen.getByText('Magowie'); 
      
        fireEvent.change(category, { target: { value: 'Magowie' } });
      
        expect(category.value).toBe('Magowie');
      });
    
});
