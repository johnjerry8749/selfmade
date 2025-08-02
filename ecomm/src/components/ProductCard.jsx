import React, { useState } from 'react';
import { Card, Badge, Button, Modal, Row, Col, Toast, ToastContainer } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  // Destructure product properties
  const { 
    name, 
    image, 
    price, 
    originalPrice, 
    discount, 
    rating = 5 
  } = product;

  // State for modal, toast, and size selection
  const { addToCart, isInCart, getItemQuantity } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [error, setError] = useState('');

  // Check if product is in cart (you'll need to implement this logic)
  const productInCart = isInCart(product.id);
  const cartQuantity = getItemQuantity(product.id);

  const handleAddToCart = () => {
    // Create product object with selected size
    const productWithSize = {
      ...product,
      selectedSize: selectedSize || 'M' // Default to 'M' if no size selected
    };
    
    addToCart(productWithSize);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const handleviewcart = () => {
    setShowModal(true);
  };

  const sizeStyles = {
    base: {
      cursor: 'pointer',
      padding: '8px 12px',
      margin: '2px',
      border: '1px solid #dee2e6',
      borderRadius: '4px',
      backgroundColor: 'transparent',
      transition: 'all 0.2s ease-in-out',
      display: 'inline-block',
      minWidth: '40px',
      textAlign: 'center',
      userSelect: 'none'
    },
    selected: {
      borderColor: '#0d6efd',
      backgroundColor: '#e7f1ff',
      color: '#0d6efd',
      fontWeight: 'bold'
    }
  };

  return (
    <>
      {/* Product Card */}
      <Card className="h-100 shadow-sm product-card">
        <div className="position-relative">
          <Card.Img 
            variant="top" 
            src={image} 
            alt={name}
            className="product-image"
            style={{ height: '200px', objectFit: 'cover' }}
          />
          {discount && (
            <Badge 
              bg="danger" 
              className="position-absolute top-0 start-0 m-2"
            >
              -{discount}%
            </Badge>
          )}
          {productInCart && (
            <Badge 
              bg="success" 
              className="position-absolute top-0 end-0 m-2"
            >
              In Cart ({cartQuantity})
            </Badge>
          )}
        </div>
        
        <Card.Body className="d-flex flex-column">
          <Card.Title className="h6 mb-2">{name}</Card.Title>
          
          <div className="mb-2">
            {[...Array(5)].map((_, i) => (
              <i 
                key={i}
                className={`fas fa-star ${i < rating ? 'text-warning' : 'text-muted'}`}
              ></i>
            ))}
            <small className="text-muted ms-1">({rating})</small>
          </div>
          
          <div className="mb-3">
            <span className="h5 text-primary">${price}</span>
            {originalPrice && (
              <span className="text-muted text-decoration-line-through ms-2">
                ${originalPrice}
              </span>
            )}
          </div>
          
          <div className="mt-auto">
            <Button 
              variant={productInCart ? "success" : "primary"} 
              className="w-100 mb-2"
              onClick={handleAddToCart}
            >
              <i className={`fas ${productInCart ? 'fa-check' : 'fa-cart-plus'} me-2`}></i>
              {productInCart ? `Added (${cartQuantity})` : 'Add to Cart'}
            </Button>
            <Button variant="outline-secondary" className="w-100" onClick={handleviewcart}>
              <i className="fas fa-eye me-2"></i>
              Quick View
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* Modal for Quick View */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <img 
                src={image} 
                alt={name}
                className="img-fluid rounded"
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
            </Col>
            <Col md={6}>
              {/* Rating */}
              <div className="mb-3">
                {[...Array(5)].map((_, i) => (
                  <i 
                    key={i}
                    className={`fas fa-star ${i < rating ? 'text-warning' : 'text-muted'}`}
                  ></i>
                ))}
                <small className="text-muted ms-1">({rating} stars)</small>
              </div>
              
              {/* Price */}
              <div className="mb-3">
                <h4 className="text-primary mb-1">${price}</h4>
                {originalPrice && (
                  <span className="text-muted text-decoration-line-through me-2">
                    ${originalPrice}
                  </span>
                )}
                {discount && (
                  <Badge bg="danger">
                    -{discount}% OFF
                  </Badge>
                )}
              </div>

              {/* Description */}
              <div className="mb-3">
                <h6>Description:</h6>
                <p className="text-muted">
                  {product.description || "High-quality product with excellent features and reliable performance. Perfect for your needs with guaranteed satisfaction."}
                </p>
              </div>

              {/* Product Details */}
              <div className="mb-4">
                <h6>Product Details:</h6>
                <ul className="list-unstyled small text-muted">
                  <li><strong>Category:</strong> {product.category || "General"}</li>
                  <li><strong>Brand:</strong> {product.brand || "Generic"}</li>
                  <li><strong>Stock:</strong> {product.stock || "In Stock"}</li>
                  <li><strong>SKU:</strong> {product.sku || product.id}</li>
                </ul>
                <div className="mt-3">
                  <h6>Select Size:</h6>
                  <div className="d-flex flex-wrap gap-1">
                    {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                      <div
                        key={size}
                        onClick={() => {
                          setSelectedSize(size);
                          setError(null); // Clear error when size is selected
                        }}
                        style={{
                          ...sizeStyles.base,
                          ...(selectedSize === size ? sizeStyles.selected : {})
                        }}
                        className={`size-selector ${selectedSize === size ? 'selected' : ''}`}
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                  
                  {/* Success message */}
                  {selectedSize && (
                    <small className="text-success mt-2 d-block">
                      <i className="fas fa-check me-1"></i>
                      Selected: <strong>{selectedSize}</strong>
                    </small>
                  )}
                  
                  {/* Error message */}
                  {error && (
                    <small className="text-danger mt-2 d-block">
                      <i className="fas fa-exclamation-triangle me-1"></i>
                      {error}
                    </small>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-flex gap-2">
                <Button 
                  variant="primary" 
                  onClick={() => {
                    if (!selectedSize) {
                      setError("Please select a size before adding to cart.");
                      return;
                    }
                    handleAddToCart();
                    setShowModal(false);
                  }}
                  className="flex-fill"
                >
                  <i className="fas fa-cart-plus me-2"></i>
                  Add to Cart {selectedSize && `(${selectedSize})`}
                </Button>
                <Button 
                  variant="outline-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </Button>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      {/* Toast Notification */}
      <ToastContainer position="sticky-top" className="p-3" style={{ zIndex: 9999 }}>
        <Toast show={showToast} onClose={() => setShowToast(false)} bg="success">
          <Toast.Header>
            <i className="fas fa-check-circle me-2 text-success"></i>
            <strong className="me-auto">Added to Cart!</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            {name} {selectedSize && `(Size: ${selectedSize})`} has been added to your cart.
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default ProductCard;