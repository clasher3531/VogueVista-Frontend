import React from "react";
import HomePage from "./components/HomePage";
import HeaderUtility from "../src/components/Header/HeaderUtility";
import { getBasket } from "../src/helpers/basketHelper";
import Footer from "../src/components/Footer/Footer";
import Campaign from "../src/components/Header/Campaign";
import CartPage from "../src/components/Cart/CartPage";
import CheckoutApp from "./components/CheckoutApp";
import CheckoutPage from "../src/components/Checkout/CheckoutPage";
import CheckoutPaymentPage from "../src/components/Checkout-Payment/CheckoutPaymentPage";
import CheckoutReviewPage from "../src/components/Checkout-Review/CheckoutReviewPage";
import OrderConfirm from "../src/components/Checkout-Review/OrderConfirm";
import AllProducts from "../src/components/Category/AllProducts";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { BasketContext } from "./Context/BasketContext";
import "./App.css";

function App() {
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
      <div className="App">
        <div className={isLoader ? "loader" : "loader hidden"}>
          <img
            src={require("./images/VVLoader.gif")}
            alt="Loading..."
            className="loader-image"
          />
        </div>
        <Campaign />
        <HeaderUtility />
        <Outlet />
        <Footer />
      </div>
    </BasketContext.Provider>
  );
}

export const reactRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/allProducts",
        element: <AllProducts category={"Vogue Vista Collection"} />,
      },
      {
        path: "/products/mens-clothing",
        element: <AllProducts category={"Mens Clothing"} />,
      },
      {
        path: "/products/women-clothing",
        element: <AllProducts category={"Women Clothing"} />,
      },
      {
        path: "/products/electronics",
        element: <AllProducts category={"Electronics"} />,
      },
      {
        path: "/products/jewellery",
        element: <AllProducts category={"Jewellery"} />,
      },
      {
        path: "/order-confirm",
        element: <OrderConfirm />,
      },
    ],
  },
  {
    path: "/checkout",
    element: <CheckoutApp />,
    children: [
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/checkout/review",
        element: <CheckoutReviewPage />,
      },
      {
        path: "/checkout/payment",
        element: <CheckoutPaymentPage />,
      },
    ],
  },
]);

export default App;
