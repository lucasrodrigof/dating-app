// frontend/src/services/authService.js

import api from './api';

const login = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data; // Retornar os dados do token
};

export { login };
