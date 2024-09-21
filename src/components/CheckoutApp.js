import React from "react";
import NJLogo from "./Header/NJLogo";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

function CheckoutApp() {
  return (
    <div className="checkout-page-main">
      <div className="checkout-logo">
        <NJLogo />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default CheckoutApp;
