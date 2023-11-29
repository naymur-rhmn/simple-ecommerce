import React from 'react';
import '../styles/Order.css';

function Order() {
  return (
    <div className='order'>
      <h2 className='order-title'>Order Summary</h2>
      <ul className='cart-detail'>
        <li>Selected Items: </li>
        <li>Total Price: </li>
        <li>Total Shipping Charge: </li>
        <li>Tax: </li>
        <li>Grand Total: </li>
      </ul>
      <button className='clear-btn'>Clear Cart</button>
      <button className='review-btn'>Review Order</button>
    </div>
  );
}

export default Order;
