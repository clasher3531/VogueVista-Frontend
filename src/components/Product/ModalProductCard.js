import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../../css/ModalProduct.css';

function ModalProductCard(props) {
    return (
        <div className="product-card">
            <Row>
                <Col xs={12} sm={4} md={4} lg={4} className="float-left">
                    <img className="modal-product-image" src={props.image} alt="" width="300px" height="300px"/>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8} className="float-left">
                    <Container className="modal-product-description">
                        <Row className="modal-product-title">
                            <Col>{props.title}</Col>
                        </Row>
                        <Row className="modal-product-title">
                            <Col>Price:&nbsp;INR&nbsp;{props.price}</Col>
                        </Row>
                        <Row className="modal-product-title">
                            <Col>Qty: 1</Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default ModalProductCard