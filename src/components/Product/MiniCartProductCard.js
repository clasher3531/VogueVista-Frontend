import React from "react";
import {removeProductFromBasket} from "../../helpers/basketHelper";
import { Container, Row, Col } from "react-bootstrap";
import '../../css/MiniCartProductCard.css';

function MiniCartProductCard(props) {
    async function removeBasketProductHandler() {
        var basket = await removeProductFromBasket(props.id);
        if (basket) {
            props.productRemoveBasketHandler();
        }
    }
    return (
        <div className="minicart-product-card">
            <Row>
                <Col xs={2} sm={4} md={4} lg={4} className="minicart-float-left">
                    <img className="minicart-product-image" src={props.image} alt="" width="150px" height="150px"/>
                </Col>
                <Col xs={10} sm={8} md={8} lg={8} className="minicart-description-section">
                    <Container className="minicart-product-description">
                        <Row className="mini-cart-close-icon">
                            <Col><button onClick={removeBasketProductHandler} style={{borderRadius: "50%", border: "1px", float: "right"}}>X</button></Col>
                        </Row>
                        <Row className="minicart-product-title">
                            <Col>
                                {props.title}
                            </Col>
                        </Row>
                        <Row className="minicart-product-title">
                            <Col>Price:&nbsp;INR&nbsp;{props.price}</Col>
                        </Row>
                        <Row className="minicart-product-title">
                            <Col>Qty:&nbsp;{props.qty}</Col>
                        </Row>
                    </Container>
                </Col>
            </Row><br></br>
        </div>
    )
}

export default MiniCartProductCard;