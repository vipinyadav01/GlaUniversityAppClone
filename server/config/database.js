const mongoose = require('mongoose');

// Database configuration
const dbConfig = {
  // MongoDB connection URL
  url: process.env.MONGODB_URI || 'mongodb://localhost:27017/yourdbname',
  
  // Connection options
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
};

// Connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(dbConfig.url, dbConfig.options);
    console.log('Successfully connected to the database');
  } catch (error) {
    console.error('Database connection error:', error);
    // Exit process with failure
    process.exit(1);
  }
};

// Export the connection function
module.exports = connectDB;
