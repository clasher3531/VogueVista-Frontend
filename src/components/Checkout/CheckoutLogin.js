import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {getBasket, setEmailAddress} from "../../helpers/basketHelper";
const emailRegex = /[A-Za-z0-9._%+]+@[a-z0-9A-Z]+\.[a-z]{2,}$/;

function CheckoutLogin(props) {
    const [isEmailValid, setEmailValid] = React.useState(false);
    const [emailAddress, setEmail] = React.useState(null);
    React.useEffect(function() {
        getBasket().then((currentBasket)=>{
            if (currentBasket) {
                setEmail(currentBasket.email);
            }
        }).catch((e) => {
            return null
        })
    }, []);
    const handleSubmit = async (event) => {
        const form = event.target;
        event.preventDefault();
        var isValidEmail = true;
        if (!emailRegex.test(form.email.value)) {
            if (form.email.value !== null) {
                setEmailValid(true);
            }
            event.stopPropagation();
            isValidEmail = false;
        }
        if (isValidEmail) {
            setEmailValid(false);
            await setEmailAddress(form.email.value);
        }
    };
    const emailChangeHandler = (event) => {
        var email = event.target.value;
        if (emailRegex.test(email) && isEmailValid) {
            setEmailValid(false)
        }
        setEmail(email);
    }
    return (
        <div className="checkout-heading">
            <h3>PROCEED WITH YOUR ORDER</h3>
            <div className="checkout-login-section">
                <Container>
                    <Row>
                        <Col className="guest-container" lg="6" sm="12">
                            <h5 className="guest-heading">PROCEED WITHOUT REGISTRATION</h5>
                            <p>Provide your e-mail address to proceed with the purchase.</p>
                            <Form className="email-address" noValidate validated={isEmailValid} onSubmit={handleSubmit}>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="text" placeholder="Enter email" pattern={emailRegex} ref={props.emailref} required name="email" value={emailAddress ? emailAddress : ""} onChange={emailChangeHandler}/>
                                    {isEmailValid ? <Form.Control.Feedback type="invalid">Please enter valid email address</Form.Control.Feedback> : ""}
                                </Form.Group>
                                <Button variant="primary" type="submit" hidden ref={props.emailaddressbutton}>
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col className="login-container" lg="6" sm="12">
                            <h5 className="login-heading">LOGIN</h5>
                            <p>Coming Soon</p>
                            <Button className="register-button" variant="dark" size="sm" disabled>Register</Button>
                            <Button variant="dark" size="sm" disabled>Login</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default CheckoutLogin;