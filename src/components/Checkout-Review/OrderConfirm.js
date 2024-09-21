import React from "react";
import ConfirmationSummary from "./ConfirmationSummary";
import { useLocation } from "react-router-dom";
import "../../css/checkout-payment/checkoutPayment.css";

function OrderConfirm() {
  var location = useLocation();
  var orderNo = location.state;
  return (
    <div className="order-confirm">
      <ConfirmationSummary orderNo={orderNo} />
    </div>
  );
}

export default OrderConfirm;
