import React, { useContext } from "react";
import CheckoutShippingSummary from "../Checkout-Payment/CheckoutShippingSummary";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CheckoutSummary from "../Checkout/CheckoutSummary";
import CheckoutPaymentSummary from "./CheckoutPaymentSummary";
import { BasketContext } from "../../Context/BasketContext";
import "../../css/checkout-payment/checkoutPayment.css";

function CheckoutReviewPage() {
  const { basketData } = useContext(BasketContext);
  React.useEffect(function () {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="checkout-payment-page-main">
      <div className="checkout-section">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={7}>
              <div className="checkout-shipping-summary">
                <CheckoutShippingSummary
                  shippingAddress={
                    basketData && basketData.shippingAddress
                      ? basketData.shippingAddress
                      : ""
                  }
                  shippingMethod={
                    basketData && basketData.shippingMethod
                      ? basketData.shippingMethod
                      : ""
                  }
                  isReviewPage={true}
                />
              </div>
              <div className="checkout-payment-summary">
                <CheckoutPaymentSummary
                  payment={
                    basketData && basketData.payment ? basketData.payment : ""
                  }
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={5}>
              <div className="checkout-summary">
                <CheckoutSummary
                  basketData={basketData}
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
