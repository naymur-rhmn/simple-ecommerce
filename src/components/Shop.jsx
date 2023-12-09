import React, { useEffect, useState } from 'react';
import '../styles/Shop.css';
import Product from './Product';
import Order from './Order';
import { deleteCart, getData, storeData } from '../utilities/manageStorage';

function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  //   load data
  useEffect(() => {
    const URL = './products.json';
    // const URL =
    //   'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json';
    // fetch(URL)
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    const loadData = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      setProducts(data);
    };
    loadData();
  }, []);

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

  // add to cart event hander
  function handleProduct(product) {
    let newCart = [];
    const exists = cart.find(
      (singleProduct) => singleProduct.id === product.id
    );
    if (exists) {
      exists.quantity += 1;
      const remaining = cart.filter(
        (singleProduct) => singleProduct.id !== product.id
      );
      newCart = [...remaining, exists];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    storeData(newCart);
  }

  // clear the cart
  function handleClearCart() {
    deleteCart();
    setCart([]);
  }

  return (
    <section className='shop'>
      <div className='products'>
        {products.map((product) => (
          <Product
            key={product.id}
            handleProduct={handleProduct}
            product={product}
          ></Product>
        ))}
      </div>

      <Order cart={cart} handleClearCart={handleClearCart}></Order>
    </section>
  );
}

export default Shop;
