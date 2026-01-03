export default class Vector {
	constructor(
		public x: number,
		public y: number,
	) {}

	add(other: Vector): Vector {
		return new Vector(this.x + other.x, this.y + other.y);
	}

	subtract(other: Vector): Vector {
		return new Vector(this.x - other.x, this.y - other.y);
	}
}
