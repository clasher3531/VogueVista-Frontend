import React from "react";
import CheckoutShippingSummary from "../Checkout-Payment/CheckoutShippingSummary";
import { getBasket } from "../../helpers/basketHelper";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CheckoutSummary from "../Checkout/CheckoutSummary";
import CheckoutPaymentSummary from "./CheckoutPaymentSummary";
import "../../css/checkout-payment/checkoutPayment.css";

function CheckoutReviewPage() {
  var [basket, setBasket] = React.useState({});
  React.useEffect(
    function () {
      getBasket()
        .then((currentBasket) => {
          if (currentBasket) {
            setBasket(currentBasket);
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }
        })
        .catch((e) => {
          return null;
        });
    },
    [basket.id, basket.totalPrice]
  );
  return (
    <div className="checkout-payment-page-main">
      <div className="checkout-section">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={7}>
              <div className="checkout-shipping-summary">
                <CheckoutShippingSummary
                  shippingAddress={
                    basket && basket.shippingAddress
                      ? basket.shippingAddress
                      : ""
                  }
                  shippingMethod={
                    basket && basket.shippingMethod ? basket.shippingMethod : ""
                  }
                  isReviewPage={true}
                />
              </div>
              <div className="checkout-payment-summary">
                <CheckoutPaymentSummary
                  payment={basket && basket.payment ? basket.payment : ""}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={5}>
              <div className="checkout-summary">
                <CheckoutSummary
                  basketData={basket}
                  isPaymentPage={true}
                  isReviewPage={true}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default CheckoutReviewPage;
