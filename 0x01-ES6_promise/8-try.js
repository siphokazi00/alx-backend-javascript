export default function divideFunction(numerator, denominator) {
	// Check if the denominator is zero and throw an error if true
	if (denominator === 0) {
		throw new Error('cannot divide by 0');
	}

	// Return the result of the division if the denominator is not zero
	return numerator / denominator;
}
