import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
	// Use Promise.all to handle multiple promises
	Promise.all([uploadPhoto(), createUser()])
		.then(([photoResponse, userResponse]) => {
			// Log firstName and lastName from userResponse.body
			console.log(`${userResponse.body.firstName} ${userResponse.body.lastName}`);
    })
		.catch(() => {
			// Log error message if any of the promises fail
			console.log('Signup system offline');
		});
}

export default handleProfileSignup;
