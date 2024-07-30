class Building {
	constructor(sqft) {
		if (this.constructor === Building) {
			throw new Error("Building is an abstract class and cannot be instantiated directly");
		}
		this._sqft = this._validateSqft(sqft);
	}

	get sqft() {
		return this._sqft;
	}

	_validateSqft(value) {
		if (typeof value !== 'number') {
			throw new TypeError('Square footage must be a number');
		}
		return value;
	}

	evacuationWarningMessage() {
		throw new Error('Class extending Building must override evacuationWarningMessage');
	}
}

export default Building;
