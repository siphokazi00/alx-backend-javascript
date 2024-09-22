const express = require('express');

// Create an instance of Express
const app = express();

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New route: GET /cart/:id
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

// Catch non-numeric id
app.get('/cart/*', (req, res) => {
  res.status(404).send('Not found');
});

// Start the server
const PORT = 7865;
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
