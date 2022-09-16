import React from 'react';
import './style.css';
import Banner from '../../components/banner';
import ProductCard from '../../components/productCard';
import Navigation from '../../components/navbar';

export default function Catalog() {
  return (
    <>
      <Navigation />
      <Banner />

      <div class='product-container'>
        <div class='container'>
          <div className='product-main'>
            <h2 className='title'>Products</h2>
            <div className='product-grid'>
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
