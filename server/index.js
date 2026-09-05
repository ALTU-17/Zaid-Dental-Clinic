const express = require('express');
const cors = require('cors');
const path = require('path');
const { clinicInfo, services, testimonials } = require('./data');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/clinic-info', (req, res) => {
  res.json(clinicInfo);
});

app.get('/api/services', (req, res) => {
  res.json(services);
});

app.get('/api/testimonials', (req, res) => {
  res.json(testimonials);
});

// Serve React build in production
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Zaid Dental Clinic server running on http://localhost:${PORT}`);
});