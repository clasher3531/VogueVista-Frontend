import React from "react";
import { Row, Col } from "react-bootstrap";
import ShimmerProductCard from "./ShimmerProductCard";

function ShimmerProductList(props) {
  let array = [];
  for (let i = 0; i < props.count; i++) {
    array.push(i + 10);
  }
  return (
    <Row>
      {array.map((value) => {
        return (
          <Col xs={6} sm={6} md={6} lg={3} key={value}>
            <ShimmerProductCard value={value} />
          </Col>
        );
      })}
    </Row>
  );
}

export default ShimmerProductList;
