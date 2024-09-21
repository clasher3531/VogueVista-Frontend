import React from "react";

function CheckoutSummarySubTotal(props) {
    return (
        <div className="cartpage-subtotal">
            <div className="subtotal-section">
                <div className="d-flex justify-content-between sub-total">
                    <div style={{fontWeight:"700"}}>SUBTOTAL</div>
                    <div style={{fontWeight:"700"}}>INR&nbsp;{props.totalprice}</div>
                </div>
                <div className="d-flex justify-content-between sales-tax">
                    <div>Sales Tax</div>
                    <div>INR&nbsp;{props.totaltax}</div>
                </div>
                <div className="d-flex justify-content-between shipping-method">
                    <div>{props.shippingmethod}</div>
                    <div>INR&nbsp;{props.shippingprice}</div>
                </div><hr></hr>
                <div className="d-flex justify-content-between net-price">
                    <div>TOTAL</div>
                    <div>INR&nbsp;{props.netprice}</div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutSummarySubTotal;