const express = require('express');
const fs = require('fs');
const path = require('path');

// Import the asynchronous function to read the student file
const { countStudents } = require('./3-read_file_async');

// Create an Express application
const app = express();

// Route for the root '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for '/students'
app.get('/students', (req, res) => {
  const dbPath = process.argv[2];
  
  if (!dbPath) {
    res.status(500).send('Database path not provided');
    return;
  }
  
  countStudents(dbPath)
    .then((data) => {
      res.write('This is the list of our students\n');
      res.write(data);
      res.end();
    })
    .catch((error) => {
      res.status(500).send('Cannot load the database');
    });
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app for potential reuse
module.exports = app;
