import Currency from './3-currency.js';

class Pricing {
	constructor(amount, currency) {
		this._amount = this._validateAmount(amount);
		this._currency = this._validateCurrency(currency);
	}

	get amount() {
		return this._amount;
	}

	set amount(value) {
		this._amount = this._validateAmount(value);
	}

	get currency() {
		return this._currency;
	}

	set currency(value) {
		this._currency = this._validateCurrency(value);
	}

	_validateAmount(value) {
		if (typeof value !== 'number') {
			throw new TypeError('Amount must be a number');
		}
		return value;
	}

	_validateCurrency(value) {
		if (!(value instanceof Currency)) {
			throw new TypeError('Currency must be an instance of the Currency class');
		}
		return value;
	}

	displayFullPrice() {
		return `${this._amount} ${this._currency.displayFullCurrency()}`;
	}

	static convertPrice(amount, conversionRate) {
		if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
			throw new TypeError('Both amount and conversion rate must be numbers');
		}
		return amount * conversionRate;
	}
}

export default Pricing;
