const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Attempt to read the file asynchronously
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        // Split the data into lines and filter out empty lines
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

        resolve();
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
