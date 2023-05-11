import React, { useState } from 'react';

function Admin() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState('');

  const handleAddProduct = () => {
    if (newProduct !== '') {
      setProducts([...products, newProduct]);
      setNewProduct('');
    }
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h2>Admin Page</h2>

      <h3>Add Product</h3>
      <input
        type="text"
        value={newProduct}
        onChange={(e) => setNewProduct(e.target.value)}
      />
      <button onClick={handleAddProduct}>Add</button>

      <h3>Product List</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product}
            <button onClick={() => handleDeleteProduct(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;
