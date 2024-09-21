import React from "react";

function Menu() {
  return (
    <ul className="nav justify-content-center menu">
      <li className="nav-item menu-item">
        <a className="nav-link" href="/">
          Home
        </a>
      </li>
      <li className="nav-item menu-item">
        <a
          className="nav-link"
          href="*"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Shop
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <a className="dropdown-item" href="/products/mens-clothing">
              Men
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/products/women-clothing">
              Women
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/products/jewellery">
              Jewellery
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/products/electronics">
              Electronics
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item menu-item">
        <a className="nav-link" href="*">
          Services
        </a>
      </li>
      <li className="nav-item menu-item">
        <a className="nav-link" href="*">
          Contact us
        </a>
      </li>
    </ul>
  );
}

export default Menu;
