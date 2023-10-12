import { renderHook } from "@testing-library/react";
import { useFetchChampions } from "../Hooks/useFetchChampions";
import "@testing-library/jest-dom/extend-expect";

describe("useFetchChampions Hook", () => {
	test("initial championsInfo should be empty", () => {
		const { result } = renderHook(() => useFetchChampions("some-link"));
		expect(result.current.championsInfo).toEqual([]);
	});
	test("isLoading should be true during data loading", async () => {
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetchChampions("some-link")
		);

		await waitForNextUpdate;

		expect(result.current.isLoading).toBe(true);
	});

});
