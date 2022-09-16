import React from 'react';
import './style.css';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
      <>
      <Navbar className='navbar-3' fixed='top'>
        <Container className='container-3' fluid>
          <Navbar.Brand className='brand-3' as={Link} to="/">
              <img src={require('../../assets/ANTUM_nobg.png')} alt='logo' className='octagon-3'/>
          </Navbar.Brand>
        </Container>
      </Navbar>
      </>
  );
}
