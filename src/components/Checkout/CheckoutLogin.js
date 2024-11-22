import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const emailRegex = /[A-Za-z0-9._%+]+@[a-z0-9A-Z]+\.[a-z]{2,}$/;

function CheckoutLogin(props) {
  const emailChangeHandler = (event) => {
    var email = event.target.value;
    props.setEmailAddress(email);
    if (emailRegex.test(email)) {
      props.setValidEmailAddress(true);
    }
  };
  return (
    <div className="checkout-heading">
      <h3>PROCEED WITH YOUR ORDER</h3>
      <div className="checkout-login-section">
        <Container>
          <Row>
            <Col className="guest-container" lg="6" sm="12">
              <h5 className="guest-heading">PROCEED WITHOUT REGISTRATION</h5>
              <p>Provide your e-mail address to proceed with the purchase.</p>
              <Form className="email-address" noValidate>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control
                    type="text"
                    placeholder="Enter email"
                    pattern={emailRegex}
                    required
                    name="email"
                    value={props.emailAddress ? props.emailAddress : ""}
                    onChange={emailChangeHandler}
                  />
                  {props.isValidEmailAddress !== null &&
                  !props.isValidEmailAddress ? (
                    <p style={{ color: "red", marginLeft: "5px" }}>
                      Please enter valid email address
                    </p>
                  ) : (
                    ""
                  )}
                </Form.Group>
              </Form>
            </Col>
            <Col className="login-container" lg="6" sm="12">
              <h5 className="login-heading">LOGIN</h5>
              <p>Coming Soon</p>
              <Button
                className="register-button"
                variant="dark"
                size="sm"
                disabled
              >
                Register
              </Button>
              <Button variant="dark" size="sm" disabled>
                Login
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default CheckoutLogin;
