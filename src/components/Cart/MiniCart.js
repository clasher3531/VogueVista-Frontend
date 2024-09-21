import React from "react";
import Button from 'react-bootstrap/Button';
import MiniCartProduct from "../Product/MiniCartProduct";
import { useNavigate } from 'react-router-dom';

function MiniCart(props) {
    const navigate = useNavigate();
    function checkoutButtonHandler() {
        navigate('/cart');
    }
    return (
        <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel" style={{width:"30rem"}}>
            <div className="offcanvas-header">
                <h3 className="offcanvas-title" id="offcanvasScrollingLabel">Shopping Cart{props.basketData && props.basketData.products && props.basketData.products.length > 0 ? '(' + props.basketData.products.length + ')' : ""}</h3>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div><hr></hr>
            <div className="offcanvas-body">
                {props.basketData && props.basketData.products && props.basketData.products.length > 0 ? <MiniCartProduct basketData={props.basketData} productRemoveBasketHandler={props.productRemoveBasketHandler}/> : <p style={{textAlign:"center"}}>No items are available in the cart</p>}
            </div>
            {props.basketData && props.basketData.products && props.basketData.products.length > 0 ?
            <div style={{margin:'20px'}}>
                <hr></hr>
                <div className="d-flex justify-content-between" style={{margin: '10px'}}>
                    <strong>SUBTOTAL</strong>
                    <strong>INR&nbsp;{props.basketData.totalPrice}</strong>
                </div>
                <div style={{fontSize: 'small', marginLeft:'10px'}}>Shipping and taxes calculated at checkout.</div>
                <div className="proceed-checkout-button d-grid gap-2" style={{margin:"15px 10px 10px 10px"}}>
                    <Button variant="dark" size="lg" onClick={checkoutButtonHandler}>PROCEED TO CART</Button>
                </div>
            </div>
             : ""}
        </div>
    )
}

export default MiniCart;