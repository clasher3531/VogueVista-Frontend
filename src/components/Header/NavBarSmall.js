import React from "react";
import { useNavigate } from "react-router-dom";

function NavBarSmall() {
  const navigate = useNavigate();
  const [isSmallDropDown, setSmallDropDown] = React.useState(false);
  function smallDropdownhandler(e) {
    setSmallDropDown(!isSmallDropDown);
    e.stopPropagation();
  }
  function redirectToProductPages(event) {
    var id = event.target.id;
    navigate("/products/" + id);
  }
  const handleSmallMenuRedirect = function (event) {
    var id = event.target.id;
    if (id === "navbarDropdown") {
      return;
    }
    if (id === "home-link") {
      navigate("/");
      return;
    } else if (id === "services") {
      navigate("/services");
    } else if (id === "contact-us") {
      navigate("contact-us");
    } else if (id === "login") {
      navigate("/login");
    }
  };
  return (
    <div className="navbar-small-main" onClick={handleSmallMenuRedirect}>
      <ul>
        <li>
          <p id="home-link">Home</p>
        </li>
        <li className="small-dropdown-main" onClick={smallDropdownhandler}>
          Shop
          {isSmallDropDown ? (
            <ul className="menu-item-dropdown" onClick={redirectToProductPages}>
              <li>
                <p id="mens-clothing">Men</p>
              </li>
              <li>
                <p id="women-clothing">Women</p>
              </li>
              <li>
                <p id="jewellery">Jewellery</p>
              </li>
              <li>
                <p id="electronics">Electronics</p>
              </li>
            </ul>
          ) : (
            ""
          )}
        </li>
        <li>
          <p id="services">Services</p>
        </li>
        <li>
          <p id="contact-us">Contact us</p>
        </li>
        <li>
          <p id="login">Login/Register</p>
        </li>
      </ul>
    </div>
  );
}

export default NavBarSmall;
