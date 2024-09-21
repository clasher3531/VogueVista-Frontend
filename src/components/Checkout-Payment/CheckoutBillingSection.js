import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { setPaymentInformation } from "../../helpers/basketHelper";
import { useNavigate } from "react-router-dom";

function CheckoutBillingSection(props) {
  const navigate = useNavigate();
  const [validated, setValidated] = React.useState(false);
  const handleSubmit = (event) => {
    const form = event.target;
    event.preventDefault();
    var isFormValid = true;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      isFormValid = false;
    }
    if (isFormValid) {
      var paymentData = {
        cardNumber: form.cardNumber.value,
        cardExpiry: form.expiryDate.value,
        cardCVV: form.cardCVV.value,
        cardOwner: form.cardOwner.value,
      };
      setPaymentInformation(paymentData)
        .then((basketResponse) => {
          if (basketResponse) {
            navigate("/checkout/review");
          }
        })
        .catch((e) => {
          return null;
        });
    }
    setValidated(true);
  };
  const cardNumberInputHandler = (event) => {
    event.target.value = event.target.value.replace(/\D/g, "");
  };
  return (
    <Container className="checkout-billing-section">
      <Row>
        <Col>
          <h5 className="heading-payment-details">PAYMENT DETAILS</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="heading-billing-details">PAYMENT METHOD</p>
          <div className="card-heading">
            <img
              src={
                "https://checkoutshopper-test.adyen.com/checkoutshopper/images/logos/medium/card.png"
              }
              alt=""
              width="35px"
              height="25px"
            />{" "}
            Debit Card
          </div>
          <Form
            className="payment-form"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Row>
              <Col>
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  type="text"
                  id="cardNumber"
                  pattern="[0-9]{16}"
                  placeholder="1234 5678 9123 4567"
                  maxLength="16"
                  inputMode="numeric"
                  required
                  name="cardNumber"
                  onInput={cardNumberInputHandler}
                />
                <Form.Control.Feedback type="invalid">
                  Invalid Card Number
                </Form.Control.Feedback>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control
                  type="text"
                  required
                  name="expiryDate"
                  placeholder="MM/YY"
                  pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
                  maxLength="5"
                />
                <Form.Control.Feedback type="invalid">
                  Invalid Expiry Date
                </Form.Control.Feedback>
              </Col>
              <Col>
                <Form.Label>CVV</Form.Label>
                <Form.Control
                  type="text"
                  required
                  pattern="[0-9]{3}"
                  placeholder="123"
                  maxLength="3"
                  inputMode="numeric"
                  name="cardCVV"
                  onInput={cardNumberInputHandler}
                />
                <Form.Control.Feedback type="invalid">
                  Invalid Card CVV
                </Form.Control.Feedback>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Name on Card</Form.Label>
                <Form.Control
                  type="text"
                  required
                  name="cardOwner"
                  placeholder="John Doe"
                  pattern="[A-Za-z ]+"
                />
                <Form.Control.Feedback type="invalid">
                  Invalid Card HolderName
                </Form.Control.Feedback>
              </Col>
            </Row>
            <Button
              variant="primary"
              type="submit"
              hidden
              ref={props.paymentbuttonref}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CheckoutBillingSection;
