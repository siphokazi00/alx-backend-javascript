import Building from './5-building.js';

class SkyHighBuilding extends Building {
	constructor(sqft, floors) {
		super(sqft);
		this._floors = this._validateFloors(floors);
	}

	get floors() {
		return this._floors;
	}

	_validateFloors(value) {
		if (typeof value !== 'number') {
			throw new TypeError('Number of floors must be a number');
		}
		return value;
	}

	evacuationWarningMessage() {
		return `Evacuate slowly the ${this._floors} floors.`;
	}
}

export default SkyHighBuilding;
