

const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

// Rota para atualizar a localização do usuário
router.post('/update-location', locationController.updateLocation);

module.exports = router;
