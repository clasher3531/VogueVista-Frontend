import React from "react";
import ShimmerProductCard from "./ShimmerProductCard";

function ShimmerProductList(props) {
  let array = [];
  for (let i = 0; i < props.count; i++) {
    array.push(i + 10);
  }
  return (
    <div className="shimmer-product-list">
      {array.map((value) => {
        return <ShimmerProductCard value={value} />;
      })}
    </div>
  );
}

export default ShimmerProductList;
