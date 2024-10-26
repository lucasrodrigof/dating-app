
const User = require('../models/User');

// Função para atualizar a localização do usuário
exports.updateLocation = async (req, res) => {
  const { userId, location } = req.body;

  try {
    await User.findByIdAndUpdate(userId, { location });
    res.send({ message: 'Location updated' });
  } catch (error) {
    res.status(500).send({ message: 'Error updating location', error });
  }
};
