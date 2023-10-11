import { renderHook } from "@testing-library/react";
import { useScreenDetector } from "../Hooks/useScreenDetector";
import { act } from "react-dom/test-utils";

describe("useScreenDetector Hook", () => {
	test("should update isMobile to 'true' when window width changes", () => {
		const { result } = renderHook(() => useScreenDetector());

		act(() => {
			window.innerWidth = 700;
			window.dispatchEvent(new Event("resize"));
		});

		expect(result.current.isMobile).toBe(true);
		expect(result.current.isTablet).toBe(false);
		expect(result.current.isDesktop).toBe(false);
	});
    test("should update isTablet to 'true' when window width changes", () => {
		const { result } = renderHook(() => useScreenDetector());

		act(() => {
			window.innerWidth = 900;
			window.dispatchEvent(new Event("resize"));
		});

		expect(result.current.isMobile).toBe(false);
		expect(result.current.isTablet).toBe(true);
		expect(result.current.isDesktop).toBe(false);
	});
    test("should update isDesktop to 'true' when window width changes", () => {
		const { result } = renderHook(() => useScreenDetector());

		act(() => {
			window.innerWidth = 1200;
			window.dispatchEvent(new Event("resize"));
		});

		expect(result.current.isMobile).toBe(false);
		expect(result.current.isTablet).toBe(false);
		expect(result.current.isDesktop).toBe(true);
	});
});
