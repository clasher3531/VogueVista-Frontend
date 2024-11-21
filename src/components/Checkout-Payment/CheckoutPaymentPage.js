import React, { useContext } from "react";
import CheckoutShippingSummary from "./CheckoutShippingSummary";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CheckoutSummary from "../Checkout/CheckoutSummary";
import CheckoutBillingSection from "./CheckoutBillingSection";
import { BasketContext } from "../../Context/BasketContext";
import "../../css/checkout-payment/checkoutPayment.css";

function CheckoutPaymentPage() {
  const { basketData } = useContext(BasketContext);
  var paymentButtonRef = React.createRef();
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
                      : []
                  }
                  shippingMethod={
                    basketData && basketData.shippingMethod
                      ? basketData.shippingMethod
                      : []
                  }
                />
              </div>
              <div className="checkout-payment-details">
                <CheckoutBillingSection paymentbuttonref={paymentButtonRef} />
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={5}>
              <div className="checkout-summary">
                <CheckoutSummary
                  basketData={basketData}
                  isPaymentPage={true}
                  paymentbuttonref={paymentButtonRef}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default CheckoutPaymentPage;
