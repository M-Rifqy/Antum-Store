import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './style.css';

export default function NotFound() {
  return (
    <>
    <div className='lost'>
      <h2 className='lost-h2'>Oops! Page not found.</h2>
      <h1 className='lost-h1'>404</h1>
      <p className='lost-p'>We can't find the page you're looking for.</p>
      <Button as={Link} to='/' className='lost-btn'>Go Back Home</Button>
    </div>
    </>
  );
}
