// backend/controllers/matchController.js

const User = require('../models/User');

// Função para curtir um usuário
exports.likeUser = async (req, res) => {
  const { userId, likedUserId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).send({ message: 'User not found' });

    // Adiciona o usuário curtido à lista de likes
    user.likes.push(likedUserId);
    await user.save();

    res.send({ message: 'User liked successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error liking user', error });
  }
};

// Função para encontrar usuários próximos
exports.findNearbyUsers = async (req, res) => {
  const { userId } = req.query;

  try {
    // Aqui você pode implementar a lógica para encontrar usuários próximos
    const nearbyUsers = await User.find({ /* lógica para encontrar usuários próximos */ });
    res.send(nearbyUsers);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching nearby users', error });
  }
};
