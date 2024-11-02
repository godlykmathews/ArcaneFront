import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getProducts = () => axios.get(`${API_URL}/products`);
export const getProduct = (id) => axios.get(`${API_URL}/products/${id}`);
export const createProduct = (product) => axios.post(`${API_URL}/products`, product);
export const updateProduct = (id, product) => axios.put(`${API_URL}/products/${id}`, product);
export const deleteProduct = (id) => axios.delete(`${API_URL}/products/${id}`);
