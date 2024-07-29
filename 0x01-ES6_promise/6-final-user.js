import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
	// Call signUpUser and uploadPhoto
	const userPromise = signUpUser(firstName, lastName);
	const photoPromise = uploadPhoto(fileName);
	
	// Use Promise.allSettled to handle both promises
	return Promise.allSettled([userPromise, photoPromise])
		.then(results => {
			// Map the results to the desired structure
			return results.map(result => ({
				status: result.status,
				value: result.status === 'fulfilled' ? result.value : result.reason
			}));
		});
}
