import React from "react";
import CartProductCard from "./CartProductCard";

function CartProductList(props) {
    return (
        <div className="cart-product-container">
            {props.basketData && props.basketData.count > 0 ? props.basketData.products.map((product) => {
                return <div key={product.id}><CartProductCard id={product.id} image={product.image} title={product.title} price={product.price} qty={product.qty} cartProductRemoveBasketHandler={props.cartProductRemoveBasketHandler} isCheckoutPage={props.isCheckoutPage}/></div>
            }) : ""}
        </div>
    )
}

export default CartProductList;