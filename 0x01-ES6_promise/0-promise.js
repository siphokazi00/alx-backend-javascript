function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		// Simulate an asynchronous operation with setTimeout
		setTimeout(() => {
			const success = true; // Simulate success or failure
			
			if (success) {
				resolve('Success'); // Resolve the promise with a success message
			} else {
				reject('Error'); // Reject the promise with an error message
			}
		}, 1000); // Simulate 1 second delay
	});
}
