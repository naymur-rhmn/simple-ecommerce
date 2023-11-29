import React, { useEffect, useState } from 'react';
import '../styles/Shop.css';
import Product from './Product';
import Order from './Order';

function Shop() {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);
  //   load data
  useEffect(() => {
    const URL =
      'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json';
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
  // add to cart event hander
  function handleProduct(pd) {
    let newCart = [...cart, pd];
    setCart(newCart);
  }
  // clear the cart
  function handleClearCart() {
    setCart([]);
  }
  console.log(cart);
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
