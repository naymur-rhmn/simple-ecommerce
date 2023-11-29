import React from 'react';
import '../styles/Product.css';

function Product({ product }) {
  const { img, name, ratings, stock, seller, price } = product;
  return (
    <div>
      <div className='single-product'>
        <div className='product-info'>
          <img className='product-img' src={img} alt='product image' />
          <div className='product-content'>
            <h3 className='product-title'>{name}</h3>
            <p className='product-price'>Price: ${price}</p>
            <p className='seller-name'>Manufacturer: {seller}</p>
            <p className='ratings'>Rating: {ratings}</p>
          </div>
        </div>
      </div>
      <button className='product-btn'>Add to Cart</button>
    </div>
  );
}

export default Product;
