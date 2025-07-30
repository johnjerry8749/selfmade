import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div style={{ paddingTop: '76px' }}>
      <Container className="py-5">
        <Row>
          <Col>
            <h1 className="text-center mb-5">Contact Us</h1>
          </Col>
        </Row>

        <Row>
          <Col lg={8} className="mb-4">
            <Card className="shadow">
              <Card.Header>
                <h4 className="mb-0">Send us a Message</h4>
              </Card.Header>
              <Card.Body>
                {showAlert && (
                  <Alert variant="success">
                    Thank you for your message! We'll get back to you soon.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" size="lg">
                    <i className="fas fa-paper-plane me-2"></i>
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="shadow mb-4">
              <Card.Header>
                <h5 className="mb-0">Contact Information</h5>
              </Card.Header>
              <Card.Body>
                <div className="mb-3">
                  <i className="fas fa-map-marker-alt text-primary me-2"></i>
                  <strong>Address:</strong><br />
                  123 Commerce Street<br />
                  Business District<br />
                  City, State 12345
                </div>

                <div className="mb-3">
                  <i className="fas fa-phone text-primary me-2"></i>
                  <strong>Phone:</strong><br />
                  +1 (555) 123-4567
                </div>

                <div className="mb-3">
                  <i className="fas fa-envelope text-primary me-2"></i>
                  <strong>Email:</strong><br />
                  support@ecommercestore.com
                </div>

                <div className="mb-3">
                  <i className="fas fa-clock text-primary me-2"></i>
                  <strong>Business Hours:</strong><br />
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </div>
              </Card.Body>
            </Card>

            <Card className="shadow">
              <Card.Header>
                <h5 className="mb-0">Quick Links</h5>
              </Card.Header>
              <Card.Body>
                <ul className="list-unstyled">
                  <li><a href="/faq" className="text-decoration-none">FAQ</a></li>
                  <li><a href="/shipping" className="text-decoration-none">Shipping Information</a></li>
                  <li><a href="/returns" className="text-decoration-none">Returns & Exchanges</a></li>
                  <li><a href="/privacy" className="text-decoration-none">Privacy Policy</a></li>
                  <li><a href="/terms" className="text-decoration-none">Terms of Service</a></li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
