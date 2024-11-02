import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ product, onDelete }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <p>Stock: {product.stock}</p>
      <Link to={`/edit-product/${product._id}`}>Edit</Link>
      <button onClick={() => onDelete(product._id)}>Delete</button>
    </div>
  );
}

export default ProductItem;
