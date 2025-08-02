import React from 'react';
import { Navbar, Nav, Container, Badge, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { getCartItemsCount } = useCart();
  const cartCount = getCartItemsCount();
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand >
          <i className="fas fa-shopping-bag me-2"></i>
          ECommerce Store
        </Navbar.Brand>
        
        {/* Mobile Cart Button - Only visible on small devices */}
        <div className="d-flex align-items-center d-lg-none">
          <Button 
            variant="outline-light" 
            size="sm"
            className="position-relative me-2"
            onClick={() => navigate('/cart')}
          >
            <i className="fas fa-shopping-cart"></i>
            {cartCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartCount}
                <span className="visually-hidden">items in cart</span>
              </span>
            )}
          </Button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          
          {/* Desktop Navigation - Hidden on small devices */}
          <Nav className="d-none d-lg-flex">
            <Button 
              variant="outline-light" 
              className="position-relative me-3"
              onClick={() => navigate('/cart')}
            >
              <i className="fas fa-shopping-cart me-1"></i>
              Cart
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                  <span className="visually-hidden">items in cart</span>
                </span>
              )}
            </Button>
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