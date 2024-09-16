const readDatabase = require('./utils');

class StudentsController {
  /**
   * Static method to get all students and display them by field.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((students) => {
        res.status(200).write('This is the list of our students\n');
        // Sort fields alphabetically
        const fields = Object.keys(students).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        
        fields.forEach((field) => {
          const studentList = students[field].join(', ');
          res.write(`Number of students in ${field}: ${students[field].length}. List: ${studentList}\n`);
        });
        res.end();
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  /**
   * Static method to get all students by major (CS or SWE).
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(process.argv[2])
      .then((students) => {
        const studentList = students[major].join(', ');
        res.status(200).send(`List: ${studentList}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
