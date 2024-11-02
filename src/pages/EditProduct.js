import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProduct, updateProduct } from '../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';

function EditProduct() {
    const [product, setProduct] = useState({ name: '', price: '', description: '', stock: '' });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        loadProduct();
    }, []);

    const loadProduct = async () => {
        const response = await getProduct(id);
        setProduct(response.data);
    };

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateProduct(id, product);
        navigate('/');
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Edit Product</h2>
            <form onSubmit={handleSubmit} className="p-4 shadow-sm bg-light rounded">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Product Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter product name"
                        className="form-control"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="Enter price"
                        className="form-control"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Enter product description"
                        className="form-control"
                        rows="3"
                        value={product.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="stock" className="form-label">Stock</label>
                    <input
                        type="number"
                        id="stock"
                        name="stock"
                        placeholder="Enter stock quantity"
                        className="form-control"
                        value={product.stock}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Update Product</button>
            </form>
        </div>
    );
}

export default EditProduct;
