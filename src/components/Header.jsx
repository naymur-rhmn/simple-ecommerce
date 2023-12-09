import React from 'react';
import '../styles/Header.css';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';

function Header() {
  return (
    <header>
      <div className='container'>
        <div className='logo'>
          <Link to='/'>Simple ECommerce</Link>
        </div>
        <nav>
          <ul className='list-items'>
            <li>
              <Link style={{ color: 'white' }} to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link style={{ color: 'white' }} to='/shop'>
                Shop
              </Link>
            </li>
            <li>
              <Link style={{ color: 'white' }} to='/orders'>
                Orders
              </Link>
            </li>
            <li>
              <Link style={{ color: 'white' }} to='/order-review'>
                Order Review
              </Link>
            </li>
            <li>Manage Inventory</li>
            <li>Login</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
