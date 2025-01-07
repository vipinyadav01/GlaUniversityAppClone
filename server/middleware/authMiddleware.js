const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  
  if (!token) {
    return res.status(403).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

// Login authentication
const authenticateUser = async (email, password) => {
  if (process.env.NODE_ENV === 'development') {
    if (
      email === process.env.DEFAULT_USERNAME &&
      password === process.env.DEFAULT_PASSWORD
    ) {
      return { 
        id: 'dev-user', 
        email: process.env.DEFAULT_USERNAME 
      };
    }
  }

  // Actual user authentication logic would go here
  // Typically involves checking against a database
  // For now, this is a placeholder
  throw new Error('Invalid credentials');
};

module.exports = {
  verifyToken,
  authenticateUser
};
