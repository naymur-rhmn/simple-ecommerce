import React from 'react';
import '../styles/ProductReview.css';

function ProductReview({ product, handleDelete }) {
  const { img, name, price, id, shipping, quantity } = product;
  return (
    <div className='product-review'>
      <img className='product-img' src={img} alt={`Image of ${name}`} />
      <div className='product-info'>
        <div>
          <h3>{name}</h3>
          <p>Price: ${price}</p>
          <p>Shipping: ${shipping}</p>
          <p>Quantity: ${quantity}</p>
        </div>
        {/* button */}
        <button className='delete-btn' onClick={() => handleDelete(id)}>
          delete
        </button>
      </div>
    </div>
  );
}

export default ProductReview;
