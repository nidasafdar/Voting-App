const mongoose = require('mongoose');
require('dotenv').config();

// Define the MongoDB connection URL from .env file
const mongoURL = process.env.MONGODB_URL_LOCAL; // Use your actual MongoDB URI from .env file

// Set up MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).catch(err => console.error('Error connecting to MongoDB:', err));

// Get the default connection
const db = mongoose.connection;

// Define event listeners for the database connection
db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Export the database connection
module.exports = db;
