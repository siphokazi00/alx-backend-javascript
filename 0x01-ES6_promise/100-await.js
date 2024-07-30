import uploadPhoto from './utils.js';
import createUser from './utils.js';

export async function asyncUploadUser() {
	try {
		// Await the responses from both functions
		const photoResponse = await uploadPhoto('someFileName.jpg');
		const userResponse = await createUser('John', 'Doe');

		// Return the results in the desired format
		return {
			photo: photoResponse,
			user: userResponse,
		};
	} catch (error) {
		// Return an object with null values if any function fails
		return {
			photo: null,
			user: null,
		};
	}
}
