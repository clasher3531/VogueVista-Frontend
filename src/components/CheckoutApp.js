import React from "react";
import NJLogo from "./Header/NJLogo";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import { BasketContext } from "../Context/BasketContext";
import { getBasket } from "../helpers/basketHelper";

function CheckoutApp() {
  var [basketData, setBasketData] = React.useState({});
  React.useEffect(function () {
    getBasket()
      .then((currentBasket) => {
        if (currentBasket) {
          setBasketData(currentBasket);
        }
      })
      .catch((e) => {
        return null;
      });
  }, []);
  return (
    <BasketContext.Provider value={{ basketData, setBasketData }}>
      <div className="checkout-page-main">
        <div className="checkout-logo">
          <NJLogo />
        </div>
        <Outlet />
        <Footer />
      </div>
    </BasketContext.Provider>
  );
}

export default CheckoutApp;
