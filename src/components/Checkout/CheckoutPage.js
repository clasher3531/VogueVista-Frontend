import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { shippingMethodChangeNetPrice } from "../../helpers/basketHelper";
import CheckoutLogin from "./CheckoutLogin";
import CheckoutShipping from "./CheckoutShipping";
import CheckoutShippingMethod from "./CheckoutShippingMethod";
import CheckoutSummary from "./CheckoutSummary";
import { BasketContext } from "../../Context/BasketContext";
import "../../css/checkout/checkout.css";

function CheckoutPage() {
  const { basketData, setBasketData } = useContext(BasketContext);
  var shippingButton = React.createRef();
  var emailAddressButton = React.createRef();
  var emailAddressInput = React.createRef();
  React.useEffect(function () {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  function shippingMethodChangeHandler(shipMethodData) {
    shippingMethodChangeNetPrice(shipMethodData)
      .then((currentBasketResponse) => {
        if (!currentBasketResponse.error) {
          setBasketData(currentBasketResponse.basket);
        }
      })
      .catch((e) => {
        return null;
      });
  }
  return (
    <div className="checkout-section">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={7}>
            <div className="checkout-login">
              <CheckoutLogin
                emailaddressbutton={emailAddressButton}
                emailref={emailAddressInput}
              />
            </div>
            <div className="checkout-shipping">
              <CheckoutShipping
                shippingbuttonref={shippingButton}
                shippingAddress={basketData.shippingAddress}
                emailrefinput={emailAddressInput}
              />
            </div>
            <div className="checkout-shipping-method">
              <CheckoutShippingMethod
                shippingmethodchangehandler={shippingMethodChangeHandler}
                selectedshippingmethod={basketData.shippingMethod}
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={5}>
            <div className="checkout-summary">
              <CheckoutSummary
                basketData={basketData}
                shippingbuttonref={shippingButton}
                emailaddressbutton={emailAddressButton}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CheckoutPage;
