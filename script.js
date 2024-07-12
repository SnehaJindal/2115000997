const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// In-memory storage for averages (replace with database in real applications)
let averages = {};

// POST /numbers/:numberid endpoint
app.post('/numbers/:numberid', (req, res) => {
  const numberid = req.params.numberid;
  const numbers = req.body.numbers;

  // Validate input
  if (!Array.isArray(numbers) || numbers.length === 0 || !numbers.every(num => !isNaN(num))) {
    return res.status(400).json({ error: 'Invalid numbers format or empty list' });
  }

  // Calculate average
  const average = calculateAverage(numbers);

  // Store average (in real application, store in database)
  averages[numberid] = average;

  // Return response
  res.json({ numberid, average });
});

// Helper function to calculate average
function calculateAverage(numbers) {
  const sum = numbers.reduce((acc, curr) => acc + parseFloat(curr), 0);
  return sum / numbers.length;
}

// Start server
app.listen(port, () => {
  console.log(`Average Calculator microservice listening at http://localhost:${port}`);
});