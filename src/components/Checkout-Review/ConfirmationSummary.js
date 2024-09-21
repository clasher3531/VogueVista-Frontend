import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ConfirmationSummary(props) {
    return (
        <div className="order-confirm-main">
            <h2>THANK YOU FOR CHOOSING US</h2>
            <Container className="order-section">
                <Row>
                    <Col><h5>ORDER COMPLETED SUCCESSFULLY</h5></Col>
                </Row>
                <Row>
                    <Col className="order-number">Your Order Number is: {props.orderNo}</Col>
                </Row>
                <Row>
                    <Col className="order-email-info">
                        You will receive an e-mail once your order arrives at your designated delivery address
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ConfirmationSummary;