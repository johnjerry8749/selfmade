import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// Import category images from assets
import electronicsImg from '../assets/images/watch-1.jpg';
import fashionImg from '../assets/images/jacket-1.jpg';
import homeGardenImg from '../assets/images/collection-2.jpg';
import sportsImg from '../assets/images/shoe-1.jpg';
import booksImg from '../assets/images/insta-3.jpg';
import beautyImg from '../assets/images/perfume.jpg';
import toysImg from '../assets/images/insta-5.jpg';
import automotiveImg from '../assets/images/belt.jpg';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      description: "Latest gadgets, smartphones, laptops, and tech accessories",
      image: electronicsImg,
      itemCount: 156,
      featured: true
    },
    {
      id: 2,
      name: "Clothing & Fashion",
      description: "Trendy apparel for men, women, and kids",
      image: fashionImg,
      itemCount: 324,
      featured: true
    },
    {
      id: 3,
      name: "Home & Garden",
      description: "Furniture, decor, and garden essentials",
      image: homeGardenImg,
      itemCount: 89,
      featured: false
    },
    {
      id: 4,
      name: "Sports & Outdoors",
      description: "Equipment for fitness, sports, and outdoor activities",
      image: sportsImg,
      itemCount: 234,
      featured: true
    },
    {
      id: 5,
      name: "Books & Media",
      description: "Books, e-books, movies, and educational content",
      image: booksImg,
      itemCount: 567,
      featured: false
    },
    {
      id: 6,
      name: "Beauty & Personal Care",
      description: "Skincare, makeup, and personal hygiene products",
      image: beautyImg,
      itemCount: 178,
      featured: true
    },
    {
      id: 7,
      name: "Toys & Games",
      description: "Fun and educational toys for all ages",
      image: toysImg,
      itemCount: 145,
      featured: false
    },
    {
      id: 8,
      name: "Automotive",
      description: "Car accessories, parts, and maintenance products",
      image: automotiveImg,
      itemCount: 92,
      featured: false
    }
  ];

  const featuredCategories = categories.filter(cat => cat.featured);
  const allCategories = categories;

  return (
    <div style={{ paddingTop: '76px' }}>
      <Container className="py-4">
        <Row>
          <Col>
            <h1 className="text-center mb-2">Product Categories</h1>
            <p className="text-center text-muted mb-5">
              Discover our wide range of products across different categories
            </p>
          </Col>
        </Row>

        {/* Featured Categories */}
        <Row className="mb-5">
          <Col>
            <h2 className="mb-4">Featured Categories</h2>
            <Row>
              {featuredCategories.map((category) => (
                <Col lg={3} md={6} sm={6} xs={12} key={category.id} className="mb-4">
                  <Card className="h-100 shadow-sm category-card">
                    <Card.Img 
                      variant="top" 
                      src={category.image} 
                      alt={category.name}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="h5">{category.name}</Card.Title>
                      <Card.Text className="text-muted mb-3">
                        {category.description}
                      </Card.Text>
                      <div className="mt-auto">
                        <p className="text-primary mb-3">
                          <i className="fas fa-box me-2"></i>
                          {category.itemCount} items
                        </p>
                        <Button variant="primary" className="w-100">
                          Shop Now
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* All Categories */}
        <Row>
          <Col>
            <h2 className="mb-4">All Categories</h2>
            <Row>
              {allCategories.map((category) => (
                <Col lg={3} md={4} sm={6} xs={12} key={category.id} className="mb-4">
                  <Card className="h-100 shadow-sm category-card">
                    <Card.Img 
                      variant="top" 
                      src={category.image} 
                      alt={category.name}
                      style={{ height: '150px', objectFit: 'cover' }}
                    />
                    <Card.Body className="text-center">
                      <Card.Title className="h6">{category.name}</Card.Title>
                      <p className="text-muted small mb-2">
                        {category.itemCount} products
                      </p>
                      <Button variant="outline-primary" size="sm">
                        View Products
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Category Stats */}
        <Row className="mt-5">
          <Col>
            <Card className="bg-light">
              <Card.Body>
                <Row className="text-center">
                  <Col md={3} sm={6} className="mb-3">
                    <h3 className="text-primary">{categories.length}</h3>
                    <p className="mb-0">Categories</p>
                  </Col>
                  <Col md={3} sm={6} className="mb-3">
                    <h3 className="text-success">
                      {categories.reduce((total, cat) => total + cat.itemCount, 0)}
                    </h3>
                    <p className="mb-0">Total Products</p>
                  </Col>
                  <Col md={3} sm={6} className="mb-3">
                    <h3 className="text-warning">24/7</h3>
                    <p className="mb-0">Support</p>
                  </Col>
                  <Col md={3} sm={6} className="mb-3">
                    <h3 className="text-info">Free</h3>
                    <p className="mb-0">Shipping on $50+</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Categories;
