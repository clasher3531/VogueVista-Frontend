import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CartProductList from "../Cart/CartProductList";
import CartPageHeading from "./CartPageHeading";
import CartPageSubTotal from "./CartPageSubTotal";
import { BasketContext } from "../../Context/BasketContext";
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
              {basketData &&
              basketData.products &&
              basketData.products.length > 0 ? (
                <CartProductList basketData={basketData} />
              ) : (
                <p style={{ fontWeight: "500" }}>No Items in the cart</p>
              )}
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={5}>
            <CartPageSubTotal
              totalPrice={basketData.totalPrice}
              count={basketData.count}
              taxPrice={basketData.taxPrice}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CartPage;
