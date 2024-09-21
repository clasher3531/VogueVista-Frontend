import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CheckoutPaymentSummary(props) {
  var payment = props.payment ? props.payment : null;
  return (
    <div className="checkout-shipping-summary-section">
      <h5 className="heading-shipping-details">PAYMENT</h5>
      <Row>
        <Col xs={9} sm={9} md={9} lg={9}>
          <u>
            <h6 className="shipping-address-heading">PAYMENT METHOD</h6>
          </u>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3}>
          <a className="modify-shipping-link" href="/checkout/payment">
            Modify
          </a>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          {payment !== null ? (
            <div>
              <p>Debit Card</p>
              <p>
                {"************" +
                  payment.cardNumber.substring(
                    payment.cardNumber.length - 4,
                    payment.cardNumber.length
                  )}
              </p>
            </div>
          ) : (
            ""
          )}
        </Col>
      </Row>
    </div>
  );
}

export default CheckoutPaymentSummary;
