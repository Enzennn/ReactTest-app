import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
});

export const fetchProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

export default api;