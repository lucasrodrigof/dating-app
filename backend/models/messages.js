const express = require('express');
const router = express.Router();
const Message = require('./models/Message');

// Enviar mensagem
router.post('/send', async (req, res) => {
  const { senderId, receiverId, text } = req.body;

  const message = new Message({
    sender: senderId,
    receiver: receiverId,
    text,
    timestamp: Date.now(),
  });

  await message.save();
  res.send({ message: 'Message sent' });
});

// Receber mensagens entre dois usuários
router.get('/conversation', async (req, res) => {
  const { userId1, userId2 } = req.query;

  const conversation = await Message.find({
    $or: [
      { sender: userId1, receiver: userId2 },
      { sender: userId2, receiver: userId1 },
    ],
  }).sort({ timestamp: 1 });

  res.send(conversation);
});

module.exports = router;
