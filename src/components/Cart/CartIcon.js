import React, { useContext } from "react";
import { BasketContext } from "../../Context/BasketContext";
import { useNavigate } from "react-router-dom";

function CartIcon(props) {
  var navigate = useNavigate();
  const { basketData } = useContext(BasketContext);
  function miniCartButtonHandler() {
    if (props.iscartpage) {
      navigate("/cart");
    }
  }
  return (
    <div>
      {!props.iscartpage ? (
        <div
          className="cart-icon align-self-start"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasScrolling"
          aria-controls="offcanvasRight"
          onClick={miniCartButtonHandler}
        >
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/ios-filled/50/shopping-cart.png"
            alt="shopping-cart"
          />
          {basketData && basketData.count > 0 ? (
            <span className="badge badge-warning" id="lblCartCount">
              {basketData.count}
            </span>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div
          className="cart-icon align-self-start"
          onClick={miniCartButtonHandler}
        >
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/ios-filled/50/shopping-cart.png"
            alt="shopping-cart"
          />
          {basketData && basketData.count > 0 ? (
            <span className="badge badge-warning" id="lblCartCount">
              {basketData.count}
            </span>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
}

export default CartIcon;
