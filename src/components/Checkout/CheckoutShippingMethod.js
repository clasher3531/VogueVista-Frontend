import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {getBasket} from "../../helpers/basketHelper";
var Constants = require('../../Config/Constants.json');

function CheckoutShippingMethod(props) {
    var stdDelivery = React.createRef();
    var satDelivery = React.createRef();
    function satRadioClickHandler() {
        var satData = {
            shippingMethod: Constants.SATMETHOD,
        }
        props.shippingmethodchangehandler(satData);
    }

    function stdRadioClickHandler() {
        var stdData = {
            shippingMethod: Constants.STDMETHOD,
        }
        props.shippingmethodchangehandler(stdData);
    }
    React.useEffect(function() {
        getBasket().then((currentBasket)=>{
            if (currentBasket) {
                if (currentBasket.shippingMethod === Constants.STDMETHOD && stdDelivery.current) {
                    stdDelivery.current.checked = true;
                } else if (currentBasket.shippingMethod === Constants.SATMETHOD && satDelivery.current) {
                    satDelivery.current.checked = true;
                } else if (stdDelivery.current) {
                    stdDelivery.current.checked = true;
                }
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
            }
        }).catch((e) => {
            return null
        })
    }, [stdDelivery, satDelivery])
    return (
        <div className="checkout-shipping-method">
            <h5>SHIPPING METHOD</h5>
            <p>We offers complimentary secure delivery on all orders.</p>
            <Form className="shipping-method-form">
                <Row className="mb-3">
                    <Col xs="8" lg="8" sm="8" md="9">
                        <Form.Group controlId="formGridTitleSAT">
                            <Form.Check className="shipping-method-radio" type="radio" label="SATURDAY DELIVERY OPTION" id="SAT" name="shipping-method" required ref={satDelivery} onClick={satRadioClickHandler}/>
                        </Form.Group>
                    </Col>
                    <Col xs="4" lg="4" sm="4" md="3">
                        <p>INR&nbsp;{parseFloat(Constants.satDeliveryPrice).toFixed(2).toString()}</p>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col xs="8" lg="8" sm="8" md="9">
                        <Form.Group controlId="formGridTitleSTD">
                            <Form.Check className="shipping-method-radio" type="radio" label="STANDARD DELIVERY" id="STD" name="shipping-method" required  ref={stdDelivery} onClick={stdRadioClickHandler}/>
                        </Form.Group>
                    </Col>
                    <Col xs="4" lg="4" sm="4" md="3">
                        <p>INR&nbsp;{parseFloat(Constants.stdDeliveryPrice).toFixed(2).toString()}</p>
                    </Col>
                </Row>
            </Form><hr></hr>
        </div>
    )
}

export default CheckoutShippingMethod;