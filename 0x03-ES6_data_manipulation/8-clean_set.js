export default function cleanSet(set, startString) {
	const result = Array.from(set)
		.filter(value => typeof value === 'string' && value.startsWith(startString))
		.map(value => value.slice(startString.length))
		.join('-');

	return result;
}
