import { describe, expect, it } from "vitest";
import { Vector } from "../src/Vector.js";

describe("Vector.add", () => {
	it("should add correctly two vectors", () => {
		const v1 = new Vector(1, 2);
		const v2 = new Vector(3, 4);
		const result = v1.add(v2);
		expect(result.x).toBe(4);
		expect(result.y).toBe(6);
	});
});

describe("Vector.subtract", () => {
	it("should subtract correctly two vectors", () => {
		const v1 = new Vector(1, 2);
		const v2 = new Vector(3, 4);
		const result = v1.subtract(v2);
		expect(result.x).toBe(-2);
		expect(result.y).toBe(-2);
	});
});
