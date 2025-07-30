import React, { useState } from 'react';
import { Card, Button, Badge, Toast, ToastContainer } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { name, price, originalPrice, image, rating, discount } = product;
  const { addToCart, isInCart, getItemQuantity } = useCart();
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const productInCart = isInCart(product.id);
  const cartQuantity = getItemQuantity(product.id);

  return (
    <>
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
            <Button variant="outline-secondary" className="w-100">
              <i className="fas fa-eye me-2"></i>
              Quick View
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* Toast notification */}
      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 9999 }}>
        <Toast show={showToast} onClose={() => setShowToast(false)} bg="success">
          <Toast.Header>
            <i className="fas fa-check-circle me-2 text-success"></i>
            <strong className="me-auto">Added to Cart!</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            {name} has been added to your cart.
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default ProductCard;
