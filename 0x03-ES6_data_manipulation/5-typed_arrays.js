export default function createInt8TypedArray(length, position, value) {
	// Check if the position is valid
	if (position >= length) {
		throw new Error('Position outside range');
	}

	// Create a new ArrayBuffer of the specified length
	const buffer = new ArrayBuffer(length);

	// Create an Int8Array view for the ArrayBuffer
	const int8Array = new Int8Array(buffer);

	// Set the value at the specified position
	int8Array[position] = value;

	return int8Array;
}
