export default function updateStudentGradeByCity(students, city, newGrades) {
	// Filter students by city
	return students
		.filter(student => student.location === city)
		.map(student => {
			// Find the grade for the current student
			const gradeEntry = newGrades.find(grade => grade.studentId === student.id);
			// If a grade is found, return student with the new grade, otherwise 'N/A'
			return {
				id: student.id,
				firstName: student.firstName,
				location: student.location,
				grade: gradeEntry ? gradeEntry.grade : 'N/A'
			};
		});
}
