import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <div className='container'>
        <div className='logo'>
          <a href='#'>Simple ECommerce</a>
        </div>
        <nav>
          <ul className='list-items'>
            <li>Order</li>
            <li>Order Review</li>
            <li>Manage Inventory</li>
            <li>Login</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
