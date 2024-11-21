import React from "react";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  const handleMenuRedirect = function (event) {
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
    } else {
      navigate("/products/" + id);
    }
  };
  return (
    <ul
      className="nav justify-content-center menu"
      onClick={handleMenuRedirect}
    >
      <li className="nav-item menu-item">
        <p className="nav-link" id="home-link">
          Home
        </p>
      </li>
      <li className="nav-item menu-item">
        <p
          className="nav-link"
          href="*"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Shop
        </p>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <p className="dropdown-item" id="mens-clothing">
              Men
            </p>
          </li>
          <li>
            <p className="dropdown-item" id="women-clothing">
              Women
            </p>
          </li>
          <li>
            <p className="dropdown-item" id="jewellery">
              Jewellery
            </p>
          </li>
          <li>
            <p className="dropdown-item" id="electronics">
              Electronics
            </p>
          </li>
        </ul>
      </li>
      <li className="nav-item menu-item">
        <p className="nav-link" id="services">
          Services
        </p>
      </li>
      <li className="nav-item menu-item">
        <p className="nav-link" id="contact-us">
          Contact us
        </p>
      </li>
    </ul>
  );
}

export default Menu;
