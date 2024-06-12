// middlewares/auth.js
require('dotenv').config();
const jwt = require('jsonwebtoken');

// Fungsi middleware untuk memeriksa token JWT
module.exports = (req, res, next) => {
  let token = undefined;
  if (req.header('Authorization')) {
    token = req.header('Authorization').split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};
