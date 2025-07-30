import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <div style={{ paddingTop: '76px' }}>
      <Container className="py-5">
        {/* Hero Section */}
        <Row className="mb-5">
          <Col>
            <div className="text-center">
              <h1 className="display-4 mb-4">About ECommerce Store</h1>
              <p className="lead text-muted">
                Your trusted partner for quality products and exceptional shopping experience
              </p>
            </div>
          </Col>
        </Row>

        {/* Our Story */}
        <Row className="mb-5">
          <Col lg={6} className="mb-4">
            <h2>Our Story</h2>
            <p>
              Founded in 2020, ECommerce Store began as a small family business with a simple 
              mission: to provide high-quality products at affordable prices with exceptional 
              customer service.
            </p>
            <p>
              What started as a dream has grown into a thriving online marketplace serving 
              thousands of customers worldwide. We believe that shopping should be convenient, 
              enjoyable, and reliable.
            </p>
            <p>
              Today, we continue to expand our product range while maintaining our commitment 
              to quality, customer satisfaction, and innovation.
            </p>
          </Col>
          <Col lg={6}>
            <img 
              src="https://via.placeholder.com/500x350/007bff/ffffff?text=Our+Story" 
              alt="Our Story"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>

        {/* Our Values */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-4">Our Values</h2>
            <Row>
              <Col md={4} className="text-center mb-4">
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body>
                    <i className="fas fa-heart fa-3x text-danger mb-3"></i>
                    <h4>Customer First</h4>
                    <p>
                      We put our customers at the heart of everything we do. Your satisfaction 
                      is our top priority.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="text-center mb-4">
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body>
                    <i className="fas fa-award fa-3x text-warning mb-3"></i>
                    <h4>Quality Assurance</h4>
                    <p>
                      We carefully select and test all products to ensure they meet our high 
                      standards for quality and durability.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="text-center mb-4">
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body>
                    <i className="fas fa-leaf fa-3x text-success mb-3"></i>
                    <h4>Sustainability</h4>
                    <p>
                      We're committed to environmental responsibility and sustainable business 
                      practices for a better future.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Statistics */}
        <Row className="mb-5">
          <Col>
            <Card className="bg-primary text-white">
              <Card.Body>
                <h2 className="text-center mb-4">Our Achievement</h2>
                <Row className="text-center">
                  <Col md={3} sm={6} className="mb-3">
                    <h3 className="display-4">50K+</h3>
                    <p>Happy Customers</p>
                  </Col>
                  <Col md={3} sm={6} className="mb-3">
                    <h3 className="display-4">1M+</h3>
                    <p>Products Sold</p>
                  </Col>
                  <Col md={3} sm={6} className="mb-3">
                    <h3 className="display-4">99%</h3>
                    <p>Customer Satisfaction</p>
                  </Col>
                  <Col md={3} sm={6} className="mb-3">
                    <h3 className="display-4">24/7</h3>
                    <p>Customer Support</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Team Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-4">Meet Our Team</h2>
            <Row>
              <Col lg={3} md={6} className="text-center mb-4">
                <Card className="border-0">
                  <Card.Body>
                    <img 
                      src="https://via.placeholder.com/150x150/28a745/ffffff?text=CEO" 
                      alt="CEO"
                      className="rounded-circle mb-3"
                      style={{ width: '150px', height: '150px' }}
                    />
                    <h5>John Smith</h5>
                    <p className="text-muted">Chief Executive Officer</p>
                    <div className="d-flex justify-content-center gap-2">
                      <a href="#" className="text-primary"><i className="fab fa-linkedin"></i></a>
                      <a href="#" className="text-primary"><i className="fab fa-twitter"></i></a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3} md={6} className="text-center mb-4">
                <Card className="border-0">
                  <Card.Body>
                    <img 
                      src="https://via.placeholder.com/150x150/dc3545/ffffff?text=CTO" 
                      alt="CTO"
                      className="rounded-circle mb-3"
                      style={{ width: '150px', height: '150px' }}
                    />
                    <h5>Sarah Johnson</h5>
                    <p className="text-muted">Chief Technology Officer</p>
                    <div className="d-flex justify-content-center gap-2">
                      <a href="#" className="text-primary"><i className="fab fa-linkedin"></i></a>
                      <a href="#" className="text-primary"><i className="fab fa-github"></i></a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3} md={6} className="text-center mb-4">
                <Card className="border-0">
                  <Card.Body>
                    <img 
                      src="https://via.placeholder.com/150x150/ffc107/000000?text=CMO" 
                      alt="CMO"
                      className="rounded-circle mb-3"
                      style={{ width: '150px', height: '150px' }}
                    />
                    <h5>Mike Davis</h5>
                    <p className="text-muted">Chief Marketing Officer</p>
                    <div className="d-flex justify-content-center gap-2">
                      <a href="#" className="text-primary"><i className="fab fa-linkedin"></i></a>
                      <a href="#" className="text-primary"><i className="fab fa-instagram"></i></a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3} md={6} className="text-center mb-4">
                <Card className="border-0">
                  <Card.Body>
                    <img 
                      src="https://via.placeholder.com/150x150/6f42c1/ffffff?text=COO" 
                      alt="COO"
                      className="rounded-circle mb-3"
                      style={{ width: '150px', height: '150px' }}
                    />
                    <h5>Emily Brown</h5>
                    <p className="text-muted">Chief Operating Officer</p>
                    <div className="d-flex justify-content-center gap-2">
                      <a href="#" className="text-primary"><i className="fab fa-linkedin"></i></a>
                      <a href="#" className="text-primary"><i className="fab fa-twitter"></i></a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
