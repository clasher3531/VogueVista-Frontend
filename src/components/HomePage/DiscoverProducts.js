import React from "react";
import "../../css/Discover.css";
import { useNavigate } from "react-router-dom";

function DiscoverProducts() {
  const navigate = useNavigate();
  function discoverClickHandler(event) {
    const id = event.target.id;
    navigate("/products/" + id);
  }
  return (
    <div className="site-section">
      <div className="title-section mb-5">
        <h2 className="text-uppercase">
          <span className="d-block">Discover</span> The Collections
        </h2>
      </div>
      <div className="row align-items-stretch" onClick={discoverClickHandler}>
        <div className="col-lg-8">
          <div className="product-item sm-height full-height bg-gray">
            <p id="women-clothing" className="product-category">
              Women
            </p>
            <img
              src={require("../../images/model_4.webp")}
              alt=""
              className="img-fluid"
              id="women-clothing"
              loading="lazy"
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="product-item sm-height bg-gray mb-4">
            <p id="mens-clothing" className="product-category">
              Men
            </p>
            <img
              src={require("../../images/model_5.webp")}
              alt=""
              className="img-fluid"
              id="mens-clothing"
              loading="lazy"
            />
          </div>

          <div className="product-item sm-height bg-gray">
            <p id="jewellery" className="product-category">
              Jewellery
            </p>
            <img
              src={require("../../images/jewellery-green.webp")}
              alt=""
              className="img-fluid"
              id="jewellery"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverProducts;
