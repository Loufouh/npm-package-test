import { describe, expect, it } from "vitest";
import { add_numbers } from "../src/math.js";

describe("add_numbers", () => {
	it("should return the sum of two numbers", () => {
		expect(add_numbers(2, 3)).toBe(5);
		expect(add_numbers(-1, 1)).toBe(0);
		expect(add_numbers(0, 0)).toBe(0);
	});
});
