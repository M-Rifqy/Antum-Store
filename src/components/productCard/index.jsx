import React from 'react';
import '../../pages/catalog/style.css';
import { 
  IoHeartOutline,
  IoBagAddOutline,
  IoStarOutline
} from 'react-icons/io5';

export default function ProductCard() {
  return (
    <>              
    <a href='/#' className="showcase">
    <div className="showcase-banner">
      <img src={require('../../assets/deterjen.png')} className="product-img" alt="product"/>
      <p className="showcase-badge product-label">NEW</p>
      <div className="showcase-actions">
        <button className="btn-action">
          <IoHeartOutline/>
        </button>
        <button className="btn-action">
          <IoBagAddOutline/>
        </button>
      </div>
    </div>
    <div className="showcase-content">
      <a href="/#" className='showcase-category'>XXXXX</a>
      <a href="/#">
        <h3 className='showcase-title'>Xxxxx Xxxxx Xxxxx Xxxxx Xxxxx Xxxxx Xxxxx</h3>
      </a>
      <div className="showcase-rating">
        <IoStarOutline/>
        <IoStarOutline/>
        <IoStarOutline/>
        <IoStarOutline/>
        <IoStarOutline/>
      </div>
      <div className="price-box">
        <p className='price'>Rp.Xxxxx</p>
        {/* <del>Rp.Xxxxx</del> */}
      </div>
    </div>
  </a>
    </>
  );
}
