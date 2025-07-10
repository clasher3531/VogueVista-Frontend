import React from "react";
import HomePage from "./components/HomePage/HomePage";
import HeaderUtility from "../src/components/Header/HeaderUtility";
import { getBasket } from "../src/helpers/basketHelper";
import Footer from "../src/components/Footer/Footer";
import Campaign from "../src/components/Header/Campaign";
import CheckoutPage from "../src/components/Checkout/CheckoutPage";
import CheckoutPaymentPage from "../src/components/Checkout-Payment/CheckoutPaymentPage";
import CheckoutReviewPage from "../src/components/Checkout-Review/CheckoutReviewPage";
import AllProducts from "../src/components/Category/AllProducts";
import LoadingPage from "./components/Error/LoadingPage";
import ErrorBoundaryComponent from "./components/Error/ErrorBoundaryComponent";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { BasketContext } from "./Context/BasketContext";
import { lazy, Suspense } from "react";
import "./App.css";
import NotFoundPage from "./components/Error/404Page";

const CheckoutApp = lazy(() => import("./components/CheckoutApp"));
const CartPage = lazy(() => import("./components/Cart/CartPage"));
const OrderConfirm = lazy(() =>
  import("./components/Checkout-Review/OrderConfirm")
);

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
      <ErrorBoundaryComponent>
        <div className="App">
          {isLoader ? <LoadingPage /> : ""}
          <Campaign />
          <HeaderUtility />
          <Outlet />
          <Footer />
        </div>
      </ErrorBoundaryComponent>
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
        element: (
          <Suspense fallback={<LoadingPage />}>
            <CartPage />
          </Suspense>
        ),
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
        element: (
          <Suspense fallback={<LoadingPage />}>
            <OrderConfirm />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/checkout",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <CheckoutApp />
      </Suspense>
    ),
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
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default App;
