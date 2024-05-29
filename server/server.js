// server.js
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

// Middleware
app.use(express.json());

// Routes
app.use('/api/books', require('./routes/bookRoutes'));
app.use('/api/students', require('./routes/studentRoutes'));
app.use('/api/transactions', require('./routes/transactionRoutes'));

// Server Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
