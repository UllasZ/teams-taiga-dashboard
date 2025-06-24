import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // Your FastAPI backend
});

export default api;
