import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styles from './NavBar.module.scss';

const NavBar = () => (
  <Navbar className={styles.navbar} expand='md'>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='mr-auto'>
        <Nav.Link href='/'>Home</Nav.Link>
        <Nav.Link href='/shop/furniture'>Furniture</Nav.Link>
        <Nav.Link href='/shop/chair'>Chair</Nav.Link>
        <Nav.Link href='/shop/table'>Table</Nav.Link>
        <Nav.Link href='/shop/sofa'>Sofa</Nav.Link>
        <Nav.Link href='/shop/bedroom'>Bedroom</Nav.Link>
        <Nav.Link href='/shop/blog'>Blog</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
