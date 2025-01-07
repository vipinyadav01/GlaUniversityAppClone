const express = require("express");
const jwt = require("jsonwebtoken");
const { authenticateUser } = require("../middleware/authMiddleware");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await authenticateUser(email, password);

    // Compare input password with stored hashed password
    const isMatch = bcrypt.compareSync(password, user.password);

    if (isMatch) {
      // Generate JWT token
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.json({
        token,
        user: {
          id: user.id,
          email: user.email,
        },
      });
    } else {
      // Invalid password
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(401).json({ error: "Authentication failed" });
  }
});

module.exports = router;
