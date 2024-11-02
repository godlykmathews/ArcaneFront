import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../services/api';


function AddProduct() {
  const [product, setProduct] = useState({ name: '', price: '', description: '', stock: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProduct(product);
    navigate('/');
  };

  return (
<div>
  <h2 className="mb-4">Add New Product</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" className="form-control" id="name" name="name" placeholder="Name" value={product.name} onChange={handleChange} required />
    </div>
    <div className="mb-3">
      <label htmlFor="price" className="form-label">Price</label>
      <input type="number" className="form-control" id="price" name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
    </div>
    <div className="mb-3">
      <label htmlFor="description" className="form-label">Description</label>
      <textarea className="form-control" id="description" name="description" placeholder="Description" value={product.description} onChange={handleChange} required />
    </div>
    <div className="mb-3">
      <label htmlFor="stock" className="form-label">Stock</label>
      <input type="number" className="form-control" id="stock" name="stock" placeholder="Stock" value={product.stock} onChange={handleChange} required />
    </div>
    <button type="submit" className="btn btn-primary">Add Product</button>
  </form>
</div>
  );
}

export default AddProduct;
