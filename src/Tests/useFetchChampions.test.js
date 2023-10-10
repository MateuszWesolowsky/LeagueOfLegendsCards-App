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
	// it("should set an error message when network response is not ok", async () => {
	// 	const link = "https://example.com/nonexistent"; // Assuming this URL will result in a non-ok response
	// 	const { result, waitForNextUpdate } = renderHook(() =>
	// 		useFetchChampions(link)
	// 	);

	// 	await waitForNextUpdate;

	// 	expect(result.current.error).toBe("Network response was not ok");
	// });
});
