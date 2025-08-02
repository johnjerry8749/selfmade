import { Container, Row, Col, Card, Button, Table, Badge, Form } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const { 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    getCartTotal,
    getCartItemsCount,
    clearCart 
  } = useCart();

  const shipping = cartItems.length > 0 ? 9.99 : 0;
  const subtotal = getCartTotal();
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const navigate =useNavigate()

  return (
    <div style={{ paddingTop: '76px' }}>
      <Container className="py-4">
        <Row>
          <Col>
            <h1 className="mb-4">
              Shopping Cart 
              <Badge bg="primary" className="ms-2">{getCartItemsCount()}</Badge>
            </h1>
          </Col>
        </Row>

        {cartItems.length === 0 ? (
          <Row>
            <Col>
              <Card className="text-center py-5">
                <Card.Body>
                  <i className="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                  <h3>Your cart is empty</h3>
                  <p>Add some products to get started!</p>
                  <Button variant="primary" onClick={() => navigate('/products')}>
                    Continue Shopping
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col lg={8}>
              <Card>
                <Card.Header className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Cart Items</h5>
                  <Button 
                    variant="outline-danger" 
                    size="sm"
                    onClick={clearCart}
                  >
                    <i className="fas fa-trash me-1"></i>
                    Clear All
                  </Button>
                </Card.Header>
                <Card.Body className="p-0">
                  {/* Desktop Table View */}
                  <div className="table-responsive d-none d-md-block">
                    <Table className="mb-0">
                      <thead className="table-light">
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => (
                          <tr key={`${item.id}-${item.selectedSize || 'no-size'}`}>
                            <td>
                              <div className="d-flex align-items-center">
                                <img 
                                  src={item.image} 
                                  alt={item.name}
                                  className="me-3"
                                  style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                                />
                                <div>
                                  <h6 className="mb-0">{item.name}</h6>
                                  {item.selectedSize && (
                                    <div>
                                      <Badge bg="secondary" className="me-2">
                                        Size: {item.selectedSize}
                                      </Badge>
                                    </div>
                                  )}
                                  {item.discount && (
                                    <small className="text-success">
                                      <i className="fas fa-tag me-1"></i>
                                      {item.discount}% off
                                    </small>
                                  )}
                                </div>
                              </div>
                            </td>
                            <td>
                              <div>
                                <span className="fw-bold">${item.price}</span>
                                {item.originalPrice && (
                                  <div>
                                    <small className="text-muted text-decoration-line-through">
                                      ${item.originalPrice}
                                    </small>
                                  </div>
                                )}
                              </div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center" style={{ width: '120px' }}>
                                <Button 
                                  variant="outline-secondary" 
                                  size="sm"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedSize)}
                                >
                                  -
                                </Button>
                                <Form.Control
                                  type="number"
                                  value={item.quantity}
                                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0, item.selectedSize)}
                                  className="mx-2 text-center"
                                  style={{ width: '60px' }}
                                  min="0"
                                />
                                <Button 
                                  variant="outline-secondary" 
                                  size="sm"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize)}
                                >
                                  +
                                </Button>
                              </div>
                            </td>
                            <td>
                              <span className="fw-bold">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                            </td>
                            <td>
                              <Button 
                                variant="outline-danger" 
                                size="sm"
                                onClick={() => removeFromCart(item.id, item.selectedSize)}
                              >
                                <i className="fas fa-trash"></i>
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>

                  {/* Mobile Card View */}
                  <div className="d-md-none">
                    {cartItems.map((item) => (
                      <div key={`${item.id}-${item.selectedSize || 'no-size'}`} className="border-bottom p-3">
                        <div className="row g-3">
                          {/* Product Image and Info */}
                          <div className="col-4">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="img-fluid rounded"
                              style={{ width: '100%', height: '80px', objectFit: 'cover' }}
                            />
                          </div>
                          <div className="col-8">
                            <div className="d-flex justify-content-between align-items-start">
                              <div className="flex-grow-1 me-2">
                                <h6 className="mb-1 text-truncate" style={{ maxWidth: '150px' }}>
                                  {item.name}
                                </h6>
                                {item.selectedSize && (
                                  <Badge bg="secondary" className="mb-1" style={{ fontSize: '0.7rem' }}>
                                    Size: {item.selectedSize}
                                  </Badge>
                                )}
                                {item.discount && (
                                  <div>
                                    <small className="text-success">
                                      <i className="fas fa-tag me-1"></i>
                                      {item.discount}% off
                                    </small>
                                  </div>
                                )}
                              </div>
                              <Button 
                                variant="outline-danger" 
                                size="sm"
                                onClick={() => removeFromCart(item.id, item.selectedSize)}
                                style={{ padding: '0.25rem 0.5rem' }}
                              >
                                <i className="fas fa-trash" style={{ fontSize: '0.8rem' }}></i>
                              </Button>
                            </div>
                          </div>
                        </div>
                        
                        {/* Price and Quantity Row */}
                        <div className="row g-3 mt-2 align-items-center">
                          <div className="col-6">
                            <div>
                              <span className="fw-bold">${item.price}</span>
                              {item.originalPrice && (
                                <div>
                                  <small className="text-muted text-decoration-line-through">
                                    ${item.originalPrice}
                                  </small>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="d-flex align-items-center justify-content-end">
                              <Button 
                                variant="outline-secondary" 
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedSize)}
                                style={{ padding: '0.25rem 0.5rem' }}
                              >
                                -
                              </Button>
                              <span className="mx-2 fw-bold" style={{ minWidth: '30px', textAlign: 'center' }}>
                                {item.quantity}
                              </span>
                              <Button 
                                variant="outline-secondary" 
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize)}
                                style={{ padding: '0.25rem 0.5rem' }}
                              >
                                +
                              </Button>
                            </div>
                            <div className="text-end mt-1">
                              <small className="text-muted">Total: </small>
                              <span className="fw-bold">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>

              <div className="mt-3">
            <Button 
              variant="outline-primary" 
              onClick={() => navigate('/products')}
              style={{ textDecoration: 'none' }}
            >
              <i className="fas fa-arrow-left me-2"></i>
              Continue Shopping
            </Button>
          </div>
            </Col>

            <Col lg={4}>
              <Card>
                <Card.Header>
                  <h5 className="mb-0">Order Summary</h5>
                </Card.Header>
                <Card.Body>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal ({getCartItemsCount()} items):</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Shipping:</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Tax:</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between mb-3">
                    <strong>Total:</strong>
                    <strong>${total.toFixed(2)}</strong>
                  </div>
                  
                  <Button variant="primary" className="w-100 mb-2">
                    <i className="fas fa-credit-card me-2"></i>
                    Proceed to Checkout
                  </Button>
                  
                  <Button variant="outline-success" className="w-100">
                    <i className="fab fa-paypal me-2"></i>
                    PayPal
                  </Button>
                </Card.Body>
              </Card>

              <Card className="mt-3">
                <Card.Header>
                  <h6 className="mb-0">Promo Code</h6>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Control 
                        type="text" 
                        placeholder="Enter promo code"
                      />
                    </Form.Group>
                    <Button variant="outline-primary" className="w-100">
                      Apply Code
                    </Button>
                  </Form>
                </Card.Body>
              </Card>

              {/* Cart Summary Stats */}
              <Card className="mt-3 bg-light">
                <Card.Body>
                  <Row className="text-center">
                    <Col>
                      <i className="fas fa-truck text-primary fa-2x mb-2"></i>
                      <div>
                        <small className="text-muted">
                          {subtotal >= 50 ? 'Free Shipping!' : `$${(50 - subtotal).toFixed(2)} more for free shipping`}
                        </small>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Cart;