function signUpUser(firstName, lastName) {
	// Create a resolved promise with the provided firstName and lastName
	return Promise.resolve({
		firstName: firstName,
		lastName: lastName
	});
}
