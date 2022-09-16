import React from 'react';
import './style.css';

export default function Banner() {
  return (
    <>
      <div className="banner">
        <div className="container">
            <div className="slider-container">
                <div className="slider-item">
                <img src={require('../../assets/indo.png')} alt="banner" className='banner-img'/>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
