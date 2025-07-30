import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row>
          <Col md={3} sm={6} className="mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
              <li><a href="/privacy" className="text-light text-decoration-none">Privacy Policy</a></li>
              <li><a href="/terms" className="text-light text-decoration-none">Terms of Service</a></li>
            </ul>
          </Col>
          
          <Col md={3} sm={6} className="mb-4">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="/faq" className="text-light text-decoration-none">FAQ</a></li>
              <li><a href="/shipping" className="text-light text-decoration-none">Shipping Info</a></li>
              <li><a href="/returns" className="text-light text-decoration-none">Returns</a></li>
              <li><a href="/support" className="text-light text-decoration-none">Support</a></li>
            </ul>
          </Col>
          
          <Col md={3} sm={6} className="mb-4">
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <li><a href="/electronics" className="text-light text-decoration-none">Electronics</a></li>
              <li><a href="/clothing" className="text-light text-decoration-none">Clothing</a></li>
              <li><a href="/home" className="text-light text-decoration-none">Home & Garden</a></li>
              <li><a href="/sports" className="text-light text-decoration-none">Sports</a></li>
            </ul>
          </Col>
          
          <Col md={3} sm={6} className="mb-4">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-4"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-light fs-4"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-light fs-4"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-light fs-4"><i className="fab fa-linkedin"></i></a>
            </div>
          </Col>
        </Row>
        
        <hr className="my-4" />
        
        <Row>
          <Col className="text-center">
            <p>&copy; 2025 ECommerce Store. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
