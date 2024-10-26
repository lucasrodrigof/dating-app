// backend/server.js

const express = require('express');
const connectDB = require('./config/db');
const locationRoutes = require('./routes/locationRoutes');
const matchRoutes = require('./routes/matchRoutes');
const cors = require('cors');

const app = express();

// Conectar ao banco de dados
connectDB();

// Middleware
app.use(cors()); // Para permitir requisições do frontend
app.use(express.json()); // Para parsing de JSON

// Rotas
app.use('/api/location', locationRoutes);
app.use('/api/match', matchRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
