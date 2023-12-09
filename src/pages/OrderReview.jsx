import React, { useEffect, useState } from 'react';
import '../styles/OrderReview.css';
import Order from '../components/Order';
import { useLoaderData } from 'react-router-dom';
import { deleteCart, getData, removeItem } from '../utilities/manageStorage';
import ProductReview from '../components/ProductReview';

function OrderReview() {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);

  // call data from browser storage
  useEffect(() => {
    const cartData = getData();
    modifyDataUse(cartData);
  }, [products]);

  // serve storage data
  function modifyDataUse(data) {
    let selectedProducts = [];
    for (const item of data) {
      products.forEach((singleItem) => {
        if (singleItem.id === item.id) {
          singleItem.quantity = item.quantity;
          selectedProducts.push(singleItem);
        }
      });
    }
    setCart(selectedProducts);
  }

  function handleDelete(id) {
    const restProducts = cart.filter((product) => product.id !== id);
    removeItem(id);
    setCart(restProducts);
  }

  // clear the cart
  function handleClearCart() {
    deleteCart();
    setCart([]);
  }

  return (
    <section className='order-review'>
      <div className='orders'>
        {cart.map((product) => (
          <ProductReview
            key={product.id}
            product={product}
            handleDelete={handleDelete}
          ></ProductReview>
        ))}
        {cart.length === 0 ? (
          <div style={{ textAlign: 'center', fontSize: '24px' }}>
            You did not selected any Items
          </div>
        ) : (
          ''
        )}
      </div>
      <div className='order-cart'>
        <Order cart={cart} handleClearCart={handleClearCart} />
      </div>
    </section>
  );
}

export default OrderReview;
