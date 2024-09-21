import React from "react";
import {getBasket} from "../../helpers/basketHelper";
import { useNavigate } from 'react-router-dom';

function CartIcon(props) {
    var navigate = useNavigate()
    function miniCartButtonHandler() {
        getBasket().then((currentBasket)=>{
            if (currentBasket) {
                props.setBasketData(currentBasket);
            }
        }).catch((e) => {
            return null
        })
        if (props.iscartpage) {
            navigate('/cart')
        }
    }
    return (<div>
        {!props.iscartpage ? 
            <div className="cart-icon align-self-start" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasRight" onClick={miniCartButtonHandler}>
                <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/shopping-cart.png" alt="shopping-cart"/>
                {props.basketData && props.basketData.count > 0  ? <span className='badge badge-warning' id='lblCartCount'>{props.basketData.count}</span> : ""}
            </div> : 
            <div className="cart-icon align-self-start" onClick={miniCartButtonHandler}>
                <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/shopping-cart.png" alt="shopping-cart"/>
                {props.basketData && props.basketData.count > 0  ? <span className='badge badge-warning' id='lblCartCount'>{props.basketData.count}</span> : ""}
            </div>
        }</div>     
    )
    
    
}

export default CartIcon;