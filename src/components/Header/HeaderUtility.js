import React from "react";
import NJLogo from "./NJLogo";
import Menu from "./Menu";
import MiniCart from "../Cart/MiniCart";
import CartIcon from "../Cart/CartIcon";
import Login from "./Login";
import { Row, Col } from "react-bootstrap";
import NavBarSmall from "./NavBarSmall";
import { useLocation } from "react-router-dom";

function HeaderUtility() {
  const [isSmallMenuShow, setSmallMenuShow] = React.useState(false);
  const [isCartPage, setCartPage] = React.useState(false);
  const location = useLocation();
  const { pathname } = location;
  React.useEffect(
    function () {
      if (pathname === "/cart") {
        setCartPage(true);
      } else {
        setCartPage(false);
      }
    },
    [pathname]
  );
  function smallMenuClickHandler() {
    setSmallMenuShow(!isSmallMenuShow);
  }

  return (
    <div className="Header">
      <Row>
        <Col xs={6} sm={6} md={3} lg={3}>
          <div className="logo">
            <NJLogo />
          </div>
        </Col>
        <Col xs={12} sm={12} md={7} lg={7} className="menu-main">
          <Menu />
        </Col>
        <Col
          xs={3}
          sm={3}
          md={3}
          lg={3}
          className="small-menu"
          onClick={smallMenuClickHandler}
        >
          {!isSmallMenuShow ? (
            <img
              src={require("../../images/menu-small.webp")}
              alt=""
              width="20"
              height="20"
            />
          ) : (
            <img
              className="cross-img"
              src={require("../../images/cross-icon.webp")}
              alt=""
              width="25"
              height="25"
            />
          )}
        </Col>
        <Col xs={3} sm={3} md={2} lg={2} className="icons">
          <Row className="icons-main">
            <Col xs={3} sm={3} md={3} lg={3}>
              <Login />
            </Col>
            <Col xs={9} sm={9} md={9} lg={9}>
              <CartIcon iscartpage={isCartPage} />
            </Col>
          </Row>
        </Col>
        {isSmallMenuShow ? <NavBarSmall /> : ""}
        {!isCartPage ? <MiniCart /> : ""}
      </Row>
    </div>
  );
}

export default HeaderUtility;
