import React from 'react';
import '../styles/Order.css';

function Order({ cart, handleClearCart }) {
  function calculateProductInfo(cartContainer) {
    let totalPrice = 0;
    let shippingPrice = 0;
    cartContainer.forEach((item) => {
      totalPrice += item.price;
      shippingPrice += item.shipping;
    });

    let tax = ((totalPrice + shippingPrice) / 100) * 5;
    let grandTotal = totalPrice + shippingPrice + tax;

    return { totalPrice, shippingPrice, tax, grandTotal };
  }
  const orderInfo = calculateProductInfo(cart);

  return (
    <div className='order'>
      <h2 className='order-title'>Order Summary</h2>
      <ul className='cart-detail'>
        <li>Selected Items: {cart.length}</li>
        <li>Total Price: {orderInfo.totalPrice.toFixed(2)}</li>
        <li>Total Shipping Charge: {orderInfo.shippingPrice.toFixed(2)}</li>
        <li>Tax: {orderInfo.tax.toFixed(2)}</li>
        <li>Grand Total: {orderInfo.grandTotal.toFixed(2)}</li>
      </ul>
      <button onClick={handleClearCart} className='clear-btn'>
        Clear Cart
      </button>
      <button className='review-btn'>Review Order</button>
    </div>
  );
}

export default Order;
