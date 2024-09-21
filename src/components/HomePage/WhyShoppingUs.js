import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function WhyShoppingUs() {
    return (
        <div className="why-shopping-main">
            <Container>
                <Row>
                    <Col className="why-shop-heading">Why Shop With Us</Col>
                </Row>
                <Row className="shop-tag-main">
                    <Col xs={12} sm= {4} md={4} lg={4} className="why-shop-tag">
                        <img width="60" height="60" src="https://img.icons8.com/external-smashingstocks-hand-drawn-black-smashing-stocks/99/external-fast-delivery-shipping-delivery-and-fulfillment-smashingstocks-hand-drawn-black-smashing-stocks.png" 
                            alt="external-fast-delivery-shipping-delivery-and-fulfillment-smashingstocks-hand-drawn-black-smashing-stocks"/>
                        <p className="tag-heading">Fast Delivery</p>
                        <p className="tag-text">We deliver through fedex or delhivery for fast and secure deilvery</p>
                    </Col>
                    <Col xs={12} sm= {4} md={4} lg={4} className="why-shop-tag">
                        <img width="60" height="60" src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/external-free-sales-vitaliy-gorbachev-lineal-vitaly-gorbachev.png" 
                            alt="external-free-sales-vitaliy-gorbachev-lineal-vitaly-gorbachev"/>
                        <p className="tag-heading">Free Shipping</p>
                        <p className="tag-text">We offer free shipping for standard delivery orders</p>
                    </Col>
                    <Col xs={12} sm= {4} md={4} lg={4} className="why-shop-tag">
                        <img width="60" height="60" src="https://img.icons8.com/ios/50/best-seller.png" alt="best-seller"/>
                        <p className="tag-heading">Best Quality</p>
                        <p className="tag-text">We use best fabric and material for building our products</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WhyShoppingUs;