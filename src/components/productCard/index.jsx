import React from 'react';
import '../../pages/catalog/style.css';
import { 
  IoHeartOutline,
  IoBagAddOutline,
  IoStarOutline,
  IoStar
} from 'react-icons/io5';

export default function ProductCard() {
  return (
    <>              
    <a href='/#' className="showcase">
    <div className="showcase-banner">
      <img src={require('../../assets/bg.gif')} className="product-img" alt="product"/>
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
        <h3 className='showcase-title'>xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx</h3>
      </a>
      <div className="showcase-rating">
        <IoStar/>
        <IoStar/>
        <IoStar/>
        <IoStar/>
        <IoStarOutline/>
      </div>
      <div className="price-box">
        <p className='price'>$Xxxxx</p>
        <del>$Xxxxx</del>
      </div>
    </div>
  </a>
    </>
  );
}
