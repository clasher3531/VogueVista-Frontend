import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CheckoutShippingSummary(props) {
    var shippingAddress = props.shippingAddress ? props.shippingAddress : null;
    var shippingMethod = props.shippingMethod ? props.shippingMethod : null;
    var estimatedDelivery = props.estimatedDelivery ? props.estimatedDelivery : null;
    return (
        <div className="checkout-heading">
            {!props.isReviewPage ? <h3>PROCEED WITH YOUR ORDER</h3> : <h3>REVIEW YOUR ORDER</h3>}
            <div className="checkout-shipping-summary-section">
                <h5 className="heading-shipping-details">SHIPPING DETAILS</h5>
                <Row>
                    <Col xs={9} sm={9} md={9} lg={9}>
                        <u><h6 className="shipping-address-heading">SHIPPING ADDRESS</h6></u>
                    </Col>
                    <Col xs={3} sm={3} md={3} lg={3}>
                        <a className="modify-shipping-link" href="/checkout">Modify</a>
                    </Col>
                </Row><br></br>
                <Row>
                    <Col>
                        {shippingAddress !== null ?
                            <div>
                                <p>{shippingAddress.title}&nbsp;{shippingAddress.firstName}&nbsp;{shippingAddress.lastName}</p>
                                <p>{shippingAddress.address1}</p>
                                {shippingAddress.address2 !== "" ? <p>{shippingAddress.address2}</p> : ""}
                                <p>{shippingAddress.city}&nbsp;{shippingAddress.state}&nbsp;{shippingAddress.zip}</p>
                            </div>
                        : ""}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6 className="shipping-method-heading">SHIPPING METHOD</h6>
                        <p>{shippingMethod ? shippingMethod : ""}</p>
                        <p>{estimatedDelivery ? "ESTIMATED DELIVERY: " + estimatedDelivery : ""}</p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default CheckoutShippingSummary;