// backend/routes/matchRoutes.js

const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');
const authenticate = require('../middlewares/authMiddleware');

// Rota para curtir um usuário
router.post('/like', authenticate, matchController.likeUser);

// Rota para encontrar usuários próximos
router.get('/nearby', authenticate, matchController.findNearbyUsers);

module.exports = router;
