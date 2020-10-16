import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './styles.css';

const NavBar = () => {
  return (
    <Navbar id='navbar' variant='dark' sticky='top'>
      <Navbar.Brand>
        Flurry
      </Navbar.Brand>
      <Navbar.Collapse className='justify-content-end'>
        <Navbar.Text id='nav-username'>
          Nate Grobe
        </Navbar.Text>
        <Button id='signout-button'>
        Signout
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
