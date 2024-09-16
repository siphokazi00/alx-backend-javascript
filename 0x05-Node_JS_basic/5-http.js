const http = require('http');
const fs = require('fs');
const countStudents = require('./3-read_file_async'); // Import the countStudents function

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response header for plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Handle root endpoint "/"
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }

  // Handle "/students" endpoint
  else if (req.url === '/students') {
    res.write('This is the list of our students\n');

    // Get the database file path from the arguments
    const databasePath = process.argv[2];

    // Call the countStudents function to get student data
    countStudents(databasePath)
      .then(() => {
        // Return response when data is successfully fetched
        res.end();
      })
      .catch((err) => {
        // In case of an error, display the error message
        res.end(err.message);
      });
  }

  // Handle other endpoints
  else {
    res.end('404 Not Found');
  }
});

// Listen on port 1245
app.listen(1245);

// Export the app
module.exports = app;
