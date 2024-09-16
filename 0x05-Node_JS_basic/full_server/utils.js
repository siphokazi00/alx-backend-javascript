const fs = require('fs').promises;
const path = require('path');

/**
 * Reads the database and organizes students by their fields.
 * @param {string} filePath - Path to the database file.
 * @returns A promise that resolves to an object.
 */
async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.trim().split('\n');

    const studentsByField = {};

    lines.slice(1).forEach((line) => {
      const [firstname, , , field] = line.split(',');

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstname);
    });

    return studentsByField;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
