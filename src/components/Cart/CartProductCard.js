import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {removeProductFromBasket} from "../../helpers/basketHelper";

function CartProductCard(props) {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    async function removeBasketProductHandler() {
        var basket = await removeProductFromBasket(props.id);
        if (basket) {
            props.cartProductRemoveBasketHandler();
            handleClose();
        }
    }
    return (
        <div className="cart-product-card">
            <table className="cart-product-table-data">
                <tbody>
                    <tr>
                        <td rowSpan="3" className="cart-image-section"><img src={props.image} width="200px" height="200px" alt=""/></td>
                        <th className="cart-product-title">{props.title}{!props.isCheckoutPage ? <button onClick={handleShow} style={{borderRadius: "50%", border: "1px", float: "right", marginRight: "15px"}}>X</button> : ""}</th>
                    </tr>
                    <tr>
                        <td className="cart-product-price">Price:&nbsp;INR&nbsp;{props.price}</td>
                    </tr>
                    <tr>
                        <td className="cart-product-qty">Qty:&nbsp;{props.qty}</td>
                    </tr>
                </tbody>
            </table><br></br>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Remove Product?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to remove the following product from the cart?</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="outline-secondary" onClick={removeBasketProductHandler}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CartProductCard;