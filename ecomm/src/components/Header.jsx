import React from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { getCartItemsCount } = useCart();
  const cartCount = getCartItemsCount();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <i className="fas fa-shopping-bag me-2"></i>
          ECommerce Store
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          
          <Nav>
            <Nav.Link as={Link} to="/cart">
              <i className="fas fa-shopping-cart me-1"></i>
              Cart {cartCount > 0 && <Badge bg="primary">{cartCount}</Badge>}
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              <i className="fas fa-user me-1"></i>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
