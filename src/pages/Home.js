import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts, deleteProduct } from '../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      loadProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Product List</h2>
        <Link to="/add-product" className="btn btn-primary">
          Add New Product
        </Link>
      </div>

      {products.length === 0 ? (
        <p>No products found. Please add a product.</p>
      ) : (
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id}>
                <th scope="row">{index + 1}</th>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.stock}</td>
                <td>{product.description}</td>
                <td>
                  <Link to={`/edit-product/${product._id}`} className="btn btn-warning btn-sm me-2">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Home;
