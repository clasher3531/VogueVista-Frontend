import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CartProductList from "../Cart/CartProductList";
import CartPageHeading from "./CartPageHeading";
import CartPageSubTotal from "./CartPageSubTotal";
import { BasketContext } from "../../Context/BasketContext";
import ShimmerCartProduct from "../Shimmer/ShimmerCartProduct";
import "../../css/Cart.css";

function CartPage() {
  var { basketData } = useContext(BasketContext);
  React.useEffect(function () {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="cartPage">
      <CartPageHeading count={basketData.count} />
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={7}>
            <div className="cartPage-main">
              {basketData && basketData.products ? (
                <CartProductList basketData={basketData} />
              ) : (
                <ShimmerCartProduct />
              )}
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={5}>
            {basketData && basketData.products ? (
              <CartPageSubTotal
                totalPrice={basketData.totalPrice}
                count={basketData.count}
                taxPrice={basketData.taxPrice}
              />
            ) : (
              <CartPageSubTotal totalPrice={0.0} count={0.0} taxPrice={0.0} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CartPage;
