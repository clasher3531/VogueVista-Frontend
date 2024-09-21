import React from "react";

function NavBarSmall() {
    const [isSmallDropDown, setSmallDropDown] = React.useState(false);
    function smallDropdownhandler() {
        setSmallDropDown(!isSmallDropDown);
    }
    return (
        <div className="navbar-small-main">
            <ul>
                <li><a href="/">Home</a></li>
                <li className="small-dropdown-main" onClick={smallDropdownhandler}>
                    Shop
                    {isSmallDropDown ?
                    <ul className="menu-item-dropdown">
                        <li><a href="/products/mens-clothing">Men</a></li>
                        <li><a href="/products/women-clothing">Women</a></li>
                        <li><a href="/products/jewellery">Jewellery</a></li>
                        <li><a href="/products/electronics">Electronics</a></li>
                    </ul> : ""}
                </li>
                <li><a href="*">Services</a></li>
                <li><a href="*">Contact us</a></li>
                <li><a href="*">Login/Register</a></li>
            </ul>
        </div>
    )
}

export default NavBarSmall;