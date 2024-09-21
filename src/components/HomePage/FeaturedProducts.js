import React from "react";
import { fetchAllProducts } from "../../services/productFetchService";
import ProductCard from "../Product/ProductCard";
import { Row, Col } from "react-bootstrap";

function FeaturedProducts() {
  var [ProductData, setProducts] = React.useState([]);
  function getProductData() {
    fetchAllProducts()
      .then((productResponse) => {
        if (
          productResponse.error &&
          !productResponse.error &&
          productResponse.products.length === 0
        ) {
          return setProducts([]);
        }
        setProducts(productResponse.products);
      })
      .catch((e) => {
        setProducts([]);
      });
  }
  React.useEffect(function () {
    getProductData();
  }, []);
  return (
    <div className="featured-main">
      <div className="featured-heading">
        <Row>
          <Col xs={7} sm={7} md={7} lg={7}>
            <div className="featured-heading-text">
              <h2>FEATURED PRODUCTS</h2>
            </div>
          </Col>
          <Col xs={5} sm={5} md={5} lg={5}>
            <div className="featured-view-all">
              <a href="/allProducts" className="view-all-link">
                View All
              </a>
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        {ProductData.filter((product) => {
          return product.featured === true;
        }).map((product) => {
          return (
            <Col xs={6} sm={6} md={6} lg={3} key={product.id}>
              <ProductCard
                id={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default FeaturedProducts;
