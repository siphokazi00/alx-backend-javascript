export default function getStudentIdsSum(students) {
	// Check if students is an array
	if (!Array.isArray(students)) {
		return 0;
	}

	// Use reduce to sum up all the student ids
	return students.reduce((sum, student) => sum + student.id, 0);
}
