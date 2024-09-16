const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf-8');

    // Split file contents into lines and filter out empty lines
    const lines = data.trim().split('\n').filter((line) => line !== '');

    // Remove the header (first line)
    const header = lines.shift();

    const students = {};

    // Process each line (representing a student)
    lines.forEach((line) => {
      const fields = line.split(',');
      const firstName = fields[0];
      const field = fields[3];

      // Add the student to the corresponding field list
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstName);
    });

    // Log the total number of students
    console.log(`Number of students: ${lines.length}`);

    // Log the number of students per field
    for (const [field, firstNames] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${firstNames.length}. List: ${firstNames.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
