import React from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router";

function CartPageSubTotal(props) {
    const navigate = useNavigate();
    function checkoutButtonHandler() {
        navigate('/checkout');
    }
    return (
        <div className="cartpage-subtotal" style={{border:"2px solid grey", padding:"20px 30px 20px 30px"}}>
            <div className="subtotal-section">
                <div className="d-flex justify-content-between" style={{margin:"10px 2px 10px 2px"}}>
                    <div style={{fontWeight:"700"}}>SUBTOTAL</div>
                    <div style={{fontWeight:"700"}}>INR&nbsp;{props.totalPrice}</div>
                </div>
                <div className="d-flex justify-content-between" style={{margin:"10px 2px 10px 2px"}}>
                    <div>Sales Tax</div>
                    <div>INR&nbsp;{props.taxPrice}</div>
                </div>
            </div>
            {props.count > 0 ? <div className="proceed-checkout-button" style={{margin:"30px 2px 10px 2px"}}>
                <Button variant="dark" style={{width:"100%"}} onClick={checkoutButtonHandler}>PROCEED TO CHECKOUT</Button>
            </div>: ""}
        </div>
    )
}

export default CartPageSubTotal;