import React from 'react';
import '../styles/Intro.css';
import maleFashion from '../assets/male-fashion.png';
import { Link } from 'react-router-dom';

function Intro() {
  return (
    <section className='intro'>
      <div className='wraper'>
        <div className='content'>
          <span className='discount'>Sale up to 70% off</span>
          <h1 className='title'>New Collection For Fall</h1>
          <p className='text-content'>
            Discover all the new arrivals of ready-to-wear collection.
          </p>
          <Link to='/shop'>
            <button className='shop-btn'>Shop Now</button>
          </Link>
        </div>
        <div className='image'>
          <img src={maleFashion} alt='cover image' />
        </div>
      </div>
    </section>
  );
}

export default Intro;
