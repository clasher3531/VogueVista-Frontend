import React from "react";
import NJLogo from "./Header/NJLogo";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import { BasketContext } from "../Context/BasketContext";
import { getBasket } from "../helpers/basketHelper";
import LoadingPage from "./Error/LoadingPage";
import ErrorBoundaryComponent from "./Error/ErrorBoundaryComponent";

function CheckoutApp() {
  var [basketData, setBasketData] = React.useState({});
  var [isLoader, setIsLoader] = React.useState(false);
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
    <BasketContext.Provider
      value={{ basketData, setBasketData, isLoader, setIsLoader }}
    >
      <ErrorBoundaryComponent>
        <div className="checkout-page-main">
          {isLoader ? <LoadingPage /> : ""}
          <div className="checkout-logo">
            <NJLogo />
          </div>
          <Outlet />
          <Footer />
        </div>
      </ErrorBoundaryComponent>
    </BasketContext.Provider>
  );
}

export default CheckoutApp;
