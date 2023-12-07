import React, { useEffect, useState } from 'react';
import '../styles/Order.css';

function Order({ cart, handleClearCart }) {
  const [orderInfo, setOrderInfo] = useState({});

  // product info calculation function
  function calculateProductInfo(cartData) {
    let totalPrice = 0;
    let shippingPrice = 0;

    cartData.forEach((item) => {
      totalPrice += item.price * item.quantity;
      shippingPrice += item.shipping * item.quantity;
    });

    let tax = ((totalPrice + shippingPrice) / 100) * 5; // 5% tax
    let grandTotal = totalPrice + shippingPrice + tax;

    const invoice = { totalPrice, shippingPrice, tax, grandTotal };
    return invoice;
  }

  // side effect
  useEffect(() => {
    const invoice = calculateProductInfo(cart);
    setOrderInfo(invoice);
  }, [cart]);

  return (
    <div className='order'>
      <h2 className='order-title'>Order Summary</h2>
      <ul className='cart-detail'>
        <li>Selected Items: {cart.length}</li>
        <li>Total Price: {parseFloat(orderInfo.totalPrice?.toFixed(2))}</li>
        <li>
          Total Shipping Charge:{' '}
          {parseFloat(orderInfo.shippingPrice?.toFixed(2))}
        </li>
        <li>Tax: {parseFloat(orderInfo.tax?.toFixed(2))}</li>
        <li>Grand Total: {parseFloat(orderInfo.grandTotal?.toFixed(2))}</li>
      </ul>
      <button onClick={handleClearCart} className='clear-btn'>
        Clear Cart
      </button>
      <button className='review-btn'>Review Order</button>
    </div>
  );
}

export default Order;
