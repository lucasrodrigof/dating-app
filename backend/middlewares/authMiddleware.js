// backend/middlewares/authMiddleware.js

const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send('Token missing');

  jwt.verify(token, 'YOUR_SECRET_KEY', (err, decoded) => {
    if (err) return res.status(401).send('Unauthorized');
    req.userId = decoded.id;
    next();
  });
};

module.exports = authenticate;
