import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CartProductList from "../Cart/CartProductList";
import CheckoutSummarySubTotal from "./CheckoutSummarySubTotal";
import { useNavigate } from "react-router-dom";
import {
  createOrderFromBasket,
  handlePayment,
} from "../../helpers/orderHelper";
import { BasketContext } from "../../Context/BasketContext";

function CheckoutSummary(props) {
  const navigate = useNavigate();
  const { basketData, setIsLoader } = useContext(BasketContext);
  function modifyButtonHandler() {
    navigate("/cart");
  }
  function proccedPaymentHandler() {
    props.shippingbuttonref.current.click();
  }
  function proceedReviewHandler() {
    props.paymentbuttonref.current.click();
  }
  async function placeOrderButtonHandler() {
    if (basketData) {
      setIsLoader(true);
      var order = await createOrderFromBasket(basketData);
      if (order) {
        var authorizationResult = await handlePayment(order);
        setIsLoader(false);
        if (authorizationResult.success) {
          navigate("/order-confirm", { state: order.orderNumber });
        } else {
          setIsLoader(false);
          alert(
            "Payment failed. Please try again or contact customer support."
          );
        }
      } else {
        setIsLoader(false);
        alert("Failed to create order. Please try again later.");
      }
    }
  }
  return (
    <div className="checkout-summary-main">
      <Row>
        <Col lg="8" sm="8" xs="8" md="8">
          <h5>ORDER SUMMARY</h5>
          <p>{basketData.count ? basketData.count : 0}&nbsp;Item</p>
        </Col>
        <Col lg="4" sm="4" xs="4" md="4">
          <Button variant="dark" onClick={modifyButtonHandler}>
            Modify
          </Button>
        </Col>
      </Row>
      <CartProductList basketData={basketData} isCheckoutPage={true} />
      <CheckoutSummarySubTotal
        totalprice={basketData.totalPrice ? basketData.totalPrice : 0}
        shippingmethod={
          basketData.shippingMethod
            ? basketData.shippingMethod
            : "Standard Delivery"
        }
        shippingprice={
          basketData.shippingMethodPrice ? basketData.shippingMethodPrice : 0
        }
        totaltax={basketData.taxPrice ? basketData.taxPrice : 0}
        netprice={basketData.totalNetPrice ? basketData.totalNetPrice : 0}
      />
      {basketData.count > 0 ? (
        <div className="proceed-checkout-payment-details">
          {!props.isPaymentPage ? (
            <Button
              variant="dark"
              style={{ width: "100%" }}
              onClick={proccedPaymentHandler}
            >
              PROCEED TO PAYMENT DETAILS
            </Button>
          ) : !props.isReviewPage ? (
            <Button
              variant="dark"
              style={{ width: "100%" }}
              onClick={proceedReviewHandler}
            >
              REVIEW YOUR ORDER
            </Button>
          ) : (
            <Button
              variant="dark"
              style={{ width: "100%" }}
              onClick={placeOrderButtonHandler}
            >
              PLACE YOUR ORDER
            </Button>
          )}
        </div>
      ) : (
        <div className="proceed-checkout-payment-details">
          <Button variant="dark" style={{ width: "100%" }} disabled>
            LOADING....
          </Button>
        </div>
      )}
    </div>
  );
}

export default CheckoutSummary;
