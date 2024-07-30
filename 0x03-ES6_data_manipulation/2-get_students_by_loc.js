export default function getStudentsByLocation(students, city) {
	// Check if students is an array and city is a string
	if (!Array.isArray(students) || typeof city !== 'string') {
		return [];
	}

	// Use filter to get students located in the specified city
	return students.filter(student => student.location === city);
}
