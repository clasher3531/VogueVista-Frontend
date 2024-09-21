import React from "react";
import "../../css/Discover.css";

function DiscoverProducts() {
  return (
    <div className="site-section">
      <div className="title-section mb-5">
        <h2 className="text-uppercase">
          <span className="d-block">Discover</span> The Collections
        </h2>
      </div>
      <div className="row align-items-stretch">
        <div className="col-lg-8">
          <div className="product-item sm-height full-height bg-gray">
            <a href="/products/women-clothing" className="product-category">
              Women
            </a>
            <img
              src={require("../../images/model_4.png")}
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="product-item sm-height bg-gray mb-4">
            <a href="/products/mens-clothing" className="product-category">
              Men
            </a>
            <img
              src={require("../../images/model_5.png")}
              alt=""
              className="img-fluid"
            />
          </div>

          <div className="product-item sm-height bg-gray">
            <a href="/products/jewellery" className="product-category">
              Jewellery
            </a>
            <img
              src={require("../../images/jewellery-green.png")}
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverProducts;
