import React from 'react';
import './style.css';
import ProductCard from '../../components/productCard';
import Navigation from '../../components/navbar';
import Slider from '../../components/carousel';
import Footer from '../../components/footer';
import Category from '../../components/category';

export default function Catalog() {
  return (
    <>
      <Navigation />
      <Slider />
      <Category />

      <div class='product-container'>
        <div class='container'>
          <div className='product-main'>
            <h2 className='title'>Products</h2>
            <div className='product-grid'>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
