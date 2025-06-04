// Products.jsx
import React from "react";

const products = [
  { id: 1, name: "Moon Ring", price: 29.99 },
  { id: 2, name: "Sun Necklace", price: 39.99 },
  // Add more products as needed
];

const Products = ({ addToCart }) => {
  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
