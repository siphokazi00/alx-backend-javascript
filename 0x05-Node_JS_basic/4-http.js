const http = require('http');

// Create a server
const app = http.createServer((req, res) => {
  // Set the response header to indicate plain text content
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send the response
  res.end('Hello Holberton School!');
});

// The server will listen on port 1245
app.listen(1245);

// Export the app
module.exports = app;
