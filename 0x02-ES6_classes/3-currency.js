class Currency {
	constructor(code, name) {
		this._code = this._validateCode(code);
		this._name = this._validateName(name);
	}

	get code() {
		return this._code;
	}

	set code(value) {
		this._code = this._validateCode(value);
	}

	get name() {
		return this._name;
	}

	set name(value) {
		this._name = this._validateName(value);
	}

	_validateCode(value) {
		if (typeof value !== 'string') {
			throw new TypeError('Code must be a string');
		}
		return value;
	}

	_validateName(value) {
		if (typeof value !== 'string') {
			throw new TypeError('Name must be a string');
		}
		return value;
	}

	displayFullCurrency() {
		return `${this._name} (${this._code})`;
	}
}

export default Currency;
