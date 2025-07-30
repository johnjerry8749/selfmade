import React from 'react';
import { Container, Row, Col, Carousel, Button, Card } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

// Import images
import product1 from '../assets/images/product-1.jpg';
import product2 from '../assets/images/product-2.jpg';
import product3 from '../assets/images/product-3.jpg';
import product4 from '../assets/images/product-4.jpg';
import shoe2 from '../assets/images/shoe-2.jpg';
import shoe3 from '../assets/images/shoe-3.jpg';
import jacket2 from '../assets/images/jacket-2.jpg';
import shirt1 from '../assets/images/shirt-1.jpg';
import shirt2 from '../assets/images/shirt-2.jpg';
import shorts1 from '../assets/images/shorts-1.jpg';
import partyWear1 from '../assets/images/party-wear-1.jpg';
import jewellery3 from '../assets/images/jewellery-3.jpg';
// Carousel banner images
import heroBanner from '../assets/images/hero-banner.png';
import homeBanner from '../assets/images/home-banner.png';
import instaBanner from '../assets/images/insta-banner.jpg';


const Home = () => {
  // Sample data for demonstration
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Watch Collection",
      price: 199.99,
      originalPrice: 249.99,
      image: product1,
      rating: 5,
      discount: 20
    },
    {
      id: 2,
      name: "Elegant Timepiece",
      price: 299.99,
      originalPrice: 399.99,
      image: product2,
      rating: 5,
      discount: 25
    },
    {
      id: 3,
      name: "Casual Running Shoes",
      price: 89.99,
      originalPrice: 120.99,
      image: shoe2,
      rating: 4,
      discount: 25
    },
    {
      id: 4,
      name: "Designer Jacket",
      price: 79.99,
      originalPrice: 99.99,
      image: jacket2,
      rating: 4,
      discount: 20
    },
    {
      id: 5,
      name: "Trendy Shirt",
      price: 59.99,
      originalPrice: 79.99,
      image: shirt1,
      rating: 5,
      discount: 25
    },
    {
      id: 6,
      name: "Designer Jewellery",
      price: 149.99,
      originalPrice: 199.99,
      image: jewellery3,
      rating: 5,
      discount: 25
    },
    {
      id: 7,
      name: "Casual Shorts",
      price: 39.99,
      originalPrice: 59.99,
      image: shorts1,
      rating: 4,
      discount: 33
    },
    {
      id: 8,
      name: "Party Wear Dress",
      price: 129.99,
      originalPrice: 179.99,
      image: partyWear1,
      rating: 5,
      discount: 28
    },
    {
      id: 9,
      name: "Sport Sneakers",
      price: 99.99,
      originalPrice: 139.99,
      image: shoe3,
      rating: 4,
      discount: 29
    },
    {
      id: 10,
      name: "Stylish Shirt",
      price: 69.99,
      originalPrice: 89.99,
      image: shirt2,
      rating: 4,
      discount: 22
    },
    {
      id: 11,
      name: "Premium Product",
      price: 189.99,
      originalPrice: 249.99,
      image: product3,
      rating: 5,
      discount: 24
    },
    {
      id: 12,
      name: "Luxury Item",
      price: 259.99,
      originalPrice: 329.99,
      image: product4,
      rating: 5,
      discount: 21
    }
  ];

  const categories = [
    { name: "Electronics", icon: "fas fa-laptop", color: "primary" },
    { name: "Clothing", icon: "fas fa-tshirt", color: "success" },
    { name: "Home & Garden", icon: "fas fa-home", color: "warning" },
    { name: "Sports", icon: "fas fa-football-ball", color: "danger" },
    { name: "Books", icon: "fas fa-book", color: "info" },
    { name: "Beauty", icon: "fas fa-spa", color: "secondary" }
  ];

  return (
    <div style={{ paddingTop: '76px' }}>
      {/* Hero Carousel */}
      <Carousel className="mb-5" fade controls indicators>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100"
              src={heroBanner}
              alt="Hero Banner - Latest Collection"
              style={{ 
                height: '400px', 
                objectFit: 'cover'
              }}
            />
            <div className="carousel-overlay"></div>
          </div>
          <Carousel.Caption className="carousel-caption-custom">
            <div className="carousel-content">
              <h1 className="display-4 fw-bold text-white mb-3">
                Latest Collection
              </h1>
              <p className="lead text-white mb-4">
                Discover our newest arrivals with premium quality and modern design
              </p>
              <Button variant="primary" size="lg" className="px-4 py-2">
                <i className="fas fa-shopping-bag me-2"></i>
                Shop Now
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100"
              src={homeBanner}
              alt="Premium Collection"
              style={{ 
                height: '400px', 
                objectFit: 'cover'
              }}
            />
            <div className="carousel-overlay"></div>
          </div>
          <Carousel.Caption className="carousel-caption-custom">
            <div className="carousel-content">
              <h1 className="display-4 fw-bold text-white mb-3">
                Premium Collection
              </h1>
              <p className="lead text-white mb-4">
                Exclusive designs crafted with attention to detail and quality
              </p>
              <Button variant="success" size="lg" className="px-4  py-2">
                <i className="fas fa-star me-2"></i>
                Explore Premium
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100"
              src={instaBanner}
              alt="New Arrivals - Fashion Forward"
              style={{ 
                height: '400px', 
                objectFit: 'cover'
              }}
            />
            <div className="carousel-overlay"></div>
          </div>
          <Carousel.Caption className="carousel-caption-custom">
            <div className="carousel-content">
              <h1 className="display-4 fw-bold text-white mb-3">
                New Arrivals
              </h1>
              <p className="lead text-white mb-4">
                Fresh styles and trending fashion for the modern lifestyle
              </p>
              <Button variant="info" size="lg" className="px-4 py-2">
                <i className="fas fa-sparkles me-2"></i>
                Shop New
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100"
              src={heroBanner}
              alt="Summer Sale - Up to 70% Off"
              style={{ 
                height: '400px', 
                objectFit: 'cover'
              }}
            />
            <div className="carousel-overlay"></div>
          </div>
          <Carousel.Caption className="carousel-caption-custom">
            <div className="carousel-content">
              <h1 className="display-4 fw-bold text-white mb-3">
                Summer Sale
              </h1>
              <p className="lead text-white mb-4">
                Up to 70% off on selected items - Limited time offer ends soon!
              </p>
              <Button variant="danger" size="lg" className="px-4 py-2">
                <i className="fas fa-fire me-2"></i>
                Shop Sale
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        {/* Categories Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-4">Shop by Category</h2>
            <Row>
              {categories.map((category, index) => (
                <Col lg={2} md={4} sm={6} xs={6} key={index} className="mb-3">
                  <Card className="text-center h-100 category-card" style={{ cursor: 'pointer' }}>
                    <Card.Body>
                      <i className={`${category.icon} fa-3x text-${category.color} mb-3`}></i>
                      <Card.Title className="h6">{category.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Featured Products */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-4">Featured Products</h2>
            <Row>
              {featuredProducts.slice(0, 12).map((product) => (
                <Col lg={3} md={4} sm={6} xs={12} key={product.id} className="mb-4">
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
            <div className="text-center mt-4">
              <Button variant="outline-primary" size="lg" onClick={() => window.location.href = '/products'}>
                View All Products
              </Button>
            </div>
          </Col>
        </Row>

        {/* Features Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-4">Why Choose Us</h2>
            <Row>
              <Col md={4} className="text-center mb-4">
                <i className="fas fa-shipping-fast fa-3x text-primary mb-3"></i>
                <h4>Fast Delivery</h4>
                <p>Free shipping on orders over $50. Express delivery available.</p>
              </Col>
              <Col md={4} className="text-center mb-4">
                <i className="fas fa-shield-alt fa-3x text-success mb-3"></i>
                <h4>Secure Payment</h4>
                <p>Your payment information is processed securely with SSL encryption.</p>
              </Col>
              <Col md={4} className="text-center mb-4">
                <i className="fas fa-headset fa-3x text-info mb-3"></i>
                <h4>24/7 Support</h4>
                <p>Our customer service team is available 24/7 to help you.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
