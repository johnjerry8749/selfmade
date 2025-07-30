import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [alertVariant, setAlertVariant] = useState('success');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const validateForm = () => {
    const newErrors = {};

    // First Name validation (only for signup)
    if (!isLogin && !formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    // Last Name validation (only for signup)
    if (!isLogin && !formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    // Confirm Password validation (only for signup)
    if (!isLogin) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrors({});
    
    // Validate form
    if (!validateForm()) {
      // Errors will be displayed in the custom error div
      // No need to show additional alert
      return;
    }

    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setAlertVariant('success');
      setShowAlert(true);
      setIsLoading(false);
      setTimeout(() => setShowAlert(false), 3000);
      
      // Reset form on successful submission
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: ''
      });
    }, 2000);
  };

  const toggleLoginMode = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setShowAlert(false);
  };

  return (
    <div style={{ paddingTop: '76px' }}>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="shadow">
              <Card.Header className="text-center">
                <h3>{isLogin ? 'Login' : 'Sign Up'}</h3>
              </Card.Header>
              <Card.Body>
                {Object.keys(errors).length > 0 && (
                  <div className="alert alert-danger alert-dismissible" role="alert">
                    <strong>Please fix the following errors:</strong>
                    <button 
                      type="button" 
                      className="btn-close" 
                      aria-label="Close"
                      onClick={() => setErrors({})}
                    ></button>
                    <ul className="mb-0 mt-2">
                      {Object.entries(errors).map(([field, message]) => (
                        message && <li key={field}>{message}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {showAlert && (
                  <Alert variant={alertVariant}>
                    {alertVariant === 'success' 
                      ? (isLogin ? 'Login successful!' : 'Account created successfully!')
                      : 'Please fix the errors below and try again.'
                    }
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  {!isLogin && (
                    <Row>
                      <Col sm={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            disabled={isLoading}
                            required={!isLogin}
                            isInvalid={!!errors.firstName}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.firstName}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            disabled={isLoading}
                            required={!isLogin}
                            isInvalid={!!errors.lastName}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.lastName}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                  )}

                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      required
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      required
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                    {!isLogin && !errors.password && (
                      <Form.Text className="text-muted">
                        Password must be at least 6 characters long.
                      </Form.Text>
                    )}
                  </Form.Group>

                  {!isLogin && (
                    <Form.Group className="mb-3">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        disabled={isLoading}
                        required={!isLogin}
                        isInvalid={!!errors.confirmPassword}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.confirmPassword}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}

                  <Button 
                    variant="primary" 
                    type="submit" 
                    className="w-100 mb-3"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span 
                          className="spinner-border spinner-border-sm me-2" 
                          aria-hidden="true"
                        ></span>
                        <span role="status">Loading...</span>
                      </>
                    ) : (
                      isLogin ? 'Login' : 'Create Account'
                    )}
                  </Button>
                </Form>

                <div className="text-center">
                  <Button
                    variant="link"
                    onClick={toggleLoginMode}
                    className="text-decoration-none"
                    disabled={isLoading}
                  >
                    {isLogin 
                      ? "Don't have an account? Sign up" 
                      : "Already have an account? Login"
                    }
                  </Button>
                </div>

                {isLogin && (
                  <div className="text-center mt-3">
                    <Button 
                      variant="link" 
                      className="text-decoration-none"
                      disabled={isLoading}
                    >
                      Forgot Password?
                    </Button>
                  </div>
                )}

                <hr />

                <div className="text-center">
                  <p className="mb-3">Or continue with:</p>
                  <div className="d-grid gap-2">
                    <Button 
                      variant="outline-danger"
                      disabled={isLoading}
                    >
                      <i className="fab fa-google me-2"></i>
                      Google
                    </Button>
                    <Button 
                      variant="outline-primary"
                      disabled={isLoading}
                    >
                      <i className="fab fa-facebook-f me-2"></i>
                      Facebook
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
