const express = require('express');

// Create an instance of Express
const app = express();

// Middleware to parse JSON request body
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Cart route: GET /cart/:id
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

// Catch non-numeric id
app.get('/cart/*', (req, res) => {
  res.status(404).send('Not found');
});

// New route: GET /available_payments
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

// New route: POST /login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

// Start the server
const PORT = 7865;
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
