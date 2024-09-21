import React from "react";
import { Row, Col } from 'react-bootstrap';

function CartPageHeading(props) {
    return (
        <div className="cartpage-heading">
            <Row>
                <Col xs={7} sm={7} md={7} lg={6} className="shopping-bag-heading">
                    <div><h1>Shopping Bag</h1></div>
                </Col>
                <Col xs={5} sm={5} md={5} lg={6} className="shopping-bag-count">
                    <div><h1>{"(" + (props.count > 0 ? props.count > 1 ? props.count + " Items" : "1 Item" : "0 Item") + ")"}</h1></div>
                </Col>
            </Row>
        </div>
    )
}

export default CartPageHeading;