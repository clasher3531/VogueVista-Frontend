import React from "react";
import CartProductCard from "./CartProductCard";

function CartProductList(props) {
  return (
    <div className="cart-product-container">
      {props.basketData && props.basketData.count > 0 ? (
        props.basketData.products.map((product) => {
          return (
            <div key={product.id}>
              <CartProductCard
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                qty={product.qty}
                isCheckoutPage={props.isCheckoutPage}
              />
            </div>
          );
        })
      ) : (
        <p style={{ fontWeight: "500" }}>No Items in the cart</p>
      )}
    </div>
  );
}

export default CartProductList;
