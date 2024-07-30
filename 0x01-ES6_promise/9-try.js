export default function guardrail(mathFunction) {
	const queue = [];

	try {
		// Attempt to execute the mathFunction and push its result to the queue
		const result = mathFunction();
		queue.push(result);
	} catch (error) {
		// If an error occurs, push the error message to the queue
		queue.push(error.message);
	} finally {
		// Always push the message indicating that the guardrail was processed
		queue.push('Guardrail was processed');
	}

	return queue;
}
