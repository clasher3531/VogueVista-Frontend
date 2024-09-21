import React from "react";
import MiniCartProductCard from "./MiniCartProductCard";

function MiniCartProduct(props) {
    return (
        <div className="minicartproduct">
            {props.basketData.products.map(product => <div key={product.id}><MiniCartProductCard id={product.id} image={product.image} title={product.title} description={product.description} price={product.price} qty={product.qty} productRemoveBasketHandler={props.productRemoveBasketHandler}/></div>)}
        </div>
    )
}

export default MiniCartProduct;