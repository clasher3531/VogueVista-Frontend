import React from "react";
import ProductListing from "../Product/ProductListing";

function AllProducts(props) {
  React.useEffect(function () {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="all-products-main">
      <ProductListing category={props.category} />
    </div>
  );
}

export default AllProducts;
