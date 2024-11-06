const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const contacts = [];

// Get all contacts
app.get('/contacts', (req, res) => {
  res.json(contacts);
});

// Add a new contact
app.post('/contacts', (req, res) => {
  const contact = req.body;
  contacts.push(contact);
  res.status(201).json(contact);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
