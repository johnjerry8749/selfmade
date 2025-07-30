import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Pagination } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

// Import product images from assets
import product1 from '../assets/images/product-1.jpg';
import watch1 from '../assets/images/watch-1.jpg';
import watch2 from '../assets/images/watch-2.jpg';
import shoe1 from '../assets/images/shoe-1.jpg';
import shoe2 from '../assets/images/shoe-2.jpg';
import shoe3 from '../assets/images/shoe-3.jpg';
import shoe4 from '../assets/images/shoe-4.jpg';
import jacket1 from '../assets/images/jacket-1.jpg';
import jacket2 from '../assets/images/jacket-2.jpg';
import jacket4 from '../assets/images/jacket-4.jpg';
import shirt1 from '../assets/images/shirt-1.jpg';
import shirt2 from '../assets/images/shirt-2.jpg';
import shorts1 from '../assets/images/shorts-1.jpg';
import shorts2 from '../assets/images/shorts-2.jpg';
import partyWear1 from '../assets/images/party-wear-1.jpg';
import partyWear2 from '../assets/images/party-wear-2.jpg';
import jewellery1 from '../assets/images/jewellery-1.jpg';
import jewellery3 from '../assets/images/jewellery-3.jpg';
import perfume from '../assets/images/perfume.jpg';
import belt from '../assets/images/belt.jpg';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8); // Number of products per page

  // Sample products data with real images from assets
  const allProducts = [
    {
      id: 1,
      name: "Premium Watch Collection",
      price: 199.99,
      originalPrice: 249.99,
      image: watch1,
      rating: 5,
      discount: 20,
      category: "electronics"
    },
    {
      id: 2,
      name: "Elegant Timepiece",
      price: 299.99,
      originalPrice: 399.99,
      image: watch2,
      rating: 5,
      discount: 25,
      category: "electronics"
    },
    {
      id: 3,
      name: "Trendy Casual Shirt",
      price: 59.99,
      originalPrice: 79.99,
      image: shirt1,
      rating: 4,
      discount: 25,
      category: "clothing"
    },
    {
      id: 4,
      name: "Designer Leather Belt",
      price: 49.99,
      originalPrice: 69.99,
      image: belt,
      rating: 4,
      discount: 29,
      category: "accessories"
    },
    {
      id: 5,
      name: "Premium Fragrance",
      price: 89.99,
      originalPrice: 119.99,
      image: perfume,
      rating: 5,
      discount: 25,
      category: "beauty"
    },
    {
      id: 6,
      name: "Running Sneakers",
      price: 89.99,
      originalPrice: 109.99,
      image: shoe1,
      rating: 4,
      discount: 18,
      category: "clothing"
    },
    {
      id: 7,
      name: "Designer Jacket",
      price: 129.99,
      originalPrice: 169.99,
      image: jacket1,
      rating: 5,
      discount: 24,
      category: "clothing"
    },
    {
      id: 8,
      name: "Elegant Jewellery Set",
      price: 149.99,
      originalPrice: 199.99,
      image: jewellery1,
      rating: 5,
      discount: 25,
      category: "accessories"
    },
    {
      id: 9,
      name: "Sport Sneakers",
      price: 99.99,
      originalPrice: 129.99,
      image: shoe2,
      rating: 4,
      discount: 23,
      category: "clothing"
    },
    {
      id: 10,
      name: "Stylish Shirt",
      price: 69.99,
      originalPrice: 89.99,
      image: shirt2,
      rating: 4,
      discount: 22,
      category: "clothing"
    },
    {
      id: 11,
      name: "Casual Shorts",
      price: 39.99,
      originalPrice: 59.99,
      image: shorts1,
      rating: 4,
      discount: 33,
      category: "clothing"
    },
    {
      id: 12,
      name: "Party Wear Dress",
      price: 129.99,
      originalPrice: 179.99,
      image: partyWear1,
      rating: 5,
      discount: 28,
      category: "clothing"
    },
    {
      id: 13,
      name: "High-Top Sneakers",
      price: 119.99,
      originalPrice: 149.99,
      image: shoe3,
      rating: 5,
      discount: 20,
      category: "clothing"
    },
    {
      id: 14,
      name: "Winter Jacket",
      price: 159.99,
      originalPrice: 199.99,
      image: jacket2,
      rating: 5,
      discount: 20,
      category: "clothing"
    },
    {
      id: 15,
      name: "Luxury Watch",
      price: 399.99,
      originalPrice: 499.99,
      image: product1,
      rating: 5,
      discount: 20,
      category: "electronics"
    },
    {
      id: 16,
      name: "Designer Jewellery",
      price: 189.99,
      originalPrice: 249.99,
      image: jewellery3,
      rating: 5,
      discount: 24,
      category: "accessories"
    },
    {
      id: 17,
      name: "Athletic Shoes",
      price: 109.99,
      originalPrice: 139.99,
      image: shoe4,
      rating: 4,
      discount: 21,
      category: "clothing"
    },
    {
      id: 18,
      name: "Premium Jacket",
      price: 189.99,
      originalPrice: 239.99,
      image: jacket4,
      rating: 5,
      discount: 21,
      category: "clothing"
    },
    {
      id: 19,
      name: "Formal Wear",
      price: 159.99,
      originalPrice: 199.99,
      image: partyWear2,
      rating: 5,
      discount: 20,
      category: "clothing"
    },
    {
      id: 20,
      name: "Casual Shorts Set",
      price: 49.99,
      originalPrice: 69.99,
      image: shorts2,
      rating: 4,
      discount: 29,
      category: "clothing"
    }
  ];

  // Filter and sort products
  const filteredProducts = allProducts
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  // Pagination logic
  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Reset to first page when filters change
  const handleFilterChange = (filterType, value) => {
    setCurrentPage(1);
    switch (filterType) {
      case 'search':
        setSearchTerm(value);
        break;
      case 'category':
        setSelectedCategory(value);
        break;
      case 'sort':
        setSortBy(value);
        break;
      default:
        break;
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ paddingTop: '76px' }}>
      <Container className="py-4">
        <Row>
          <Col>
            <h1 className="mb-4">Products</h1>
          </Col>
        </Row>

        {/* Filters */}
        <Row className="mb-4">
          <Col lg={4} md={6} className="mb-3">
            <Form.Control
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => handleFilterChange('search', e.target.value)}
            />
          </Col>
          <Col lg={4} md={6} className="mb-3">
            <Form.Select
              value={selectedCategory}
              onChange={(e) => handleFilterChange('category', e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing & Shoes</option>
              <option value="accessories">Accessories</option>
              <option value="beauty">Beauty & Fragrance</option>
            </Form.Select>
          </Col>
          <Col lg={4} md={12} className="mb-3">
            <Form.Select
              value={sortBy}
              onChange={(e) => handleFilterChange('sort', e.target.value)}
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Sort by Rating</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Products Grid */}
        <Row>
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <Col lg={3} md={4} sm={6} xs={12} key={product.id} className="mb-4">
                <ProductCard product={product} />
              </Col>
            ))
          ) : (
            <Col>
              <Card className="text-center py-5">
                <Card.Body>
                  <h3>No products found</h3>
                  <p>Try adjusting your search criteria.</p>
                  <Button 
                    variant="primary" 
                    onClick={() => {
                      handleFilterChange('search', '');
                      handleFilterChange('category', 'all');
                    }}
                  >
                    Clear Filters
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>

        {/* Pagination */}
        {totalPages > 1 && (
          <Row className="mt-4">
            <Col>
              <div className="d-flex justify-content-center">
                <Pagination>
                  <Pagination.First 
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                  />
                  <Pagination.Prev 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  />
                  
                  {/* Page numbers */}
                  {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    // Show first page, last page, current page, and pages around current
                    const showPage = 
                      page === 1 || 
                      page === totalPages || 
                      (page >= currentPage - 1 && page <= currentPage + 1);
                    
                    if (!showPage && page === 2 && currentPage > 4) {
                      return <Pagination.Ellipsis key="ellipsis-start" />;
                    }
                    if (!showPage && page === totalPages - 1 && currentPage < totalPages - 3) {
                      return <Pagination.Ellipsis key="ellipsis-end" />;
                    }
                    
                    return showPage ? (
                      <Pagination.Item
                        key={page}
                        active={page === currentPage}
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </Pagination.Item>
                    ) : null;
                  })}
                  
                  <Pagination.Next 
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  />
                  <Pagination.Last 
                    onClick={() => handlePageChange(totalPages)}
                    disabled={currentPage === totalPages}
                  />
                </Pagination>
              </div>
            </Col>
          </Row>
        )}

        {/* Results count and pagination info */}
        <Row className="mt-4">
          <Col md={6}>
            <p className="text-muted">
              Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, totalProducts)} of {totalProducts} products
              {totalProducts !== allProducts.length && ` (filtered from ${allProducts.length} total)`}
            </p>
          </Col>
          {totalPages > 1 && (
            <Col md={6} className="text-end">
              <p className="text-muted">
                Page {currentPage} of {totalPages}
              </p>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
