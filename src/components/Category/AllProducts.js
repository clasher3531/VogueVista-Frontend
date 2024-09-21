import React from "react";
import ProductListing from "../ProductListing";

function AllProducts(props) {
  return (
    <div className="all-products-main">
      <ProductListing category={props.category} />
    </div>
  );
}

export default AllProducts;
