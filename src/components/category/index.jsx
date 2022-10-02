import React from 'react';
import './style.css';

export default function Category() {
  return (
    <>
      <div className='container m-5'>
        <div className='row'>
          <div className='col'>
            <a className='c-a' href='/#'>
              <img src={require('../../assets/mobile.png')} alt='mobile' />
              <p className='c-p'>
                Mobile
                <br />
                Games
              </p>
            </a>
          </div>
          <div className='col'>
            <a className='c-a' href='/#'>
              <img src={require('../../assets/pc.png')} alt='mobile' />
              <p className='c-p'>
                Pc
                <br />
                Games
              </p>
            </a>
          </div>
          <div className='col'>
            <a className='c-a' href='/#'>
              <img src={require('../../assets/streaming.png')} alt='mobile' />
              <p className='c-p'>
                Streaming
                <br />
                Apps
              </p>
            </a>
          </div>
          <div className='col'>
            <a className='c-a' href='/#'>
              <img src={require('../../assets/voucher.png')} alt='mobile' />
              <p className='c-p'>
                Vourchers
              </p>
            </a>
          </div>
          <div className='col'>
            <a className='c-a' href='/#'>
              <img src={require('../../assets/credit.png')} alt='mobile' />
              <p className='c-p'>
                Credits
              </p>
            </a>
          </div>
          <div className='col'>
            <a className='c-a' href='/#'>
              <img src={require('../../assets/app.png')} alt='mobile' />
              <p>
                Applications
              </p>
            </a>
          </div>
          <div className='col'>
            <a className='c-a' href='/#'>
              <img src={require('../../assets/console.png')} alt='mobile' />
              <p className='c-p'>
                Console
                <br />
                Games
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
