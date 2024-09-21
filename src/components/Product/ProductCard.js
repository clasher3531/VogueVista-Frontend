import React from 'react';
import {addProductToBasket} from '../../helpers/basketHelper';
import getProduct from '../../helpers/productHelper';
import Modal from '../../Utility/Modal';
import ModalProductCard from '../Product/ModalProductCard';
import '../../css/Product.css';

function ProductCard(props) {
    var [modalShow, setModalShow] = React.useState(false);
    async function addToCartButtonClickHandler() {
        var product = await getProduct(props.id);
        if (product) {
            var basket = await addProductToBasket(product);
            if (basket) {
                setModalShow(true);
            }
        }
    }
    return (
        <div className="product-card-main text-center">
            <div className='product-image-desc'>
                <img className="card-img-top product-image-main" src={props.image} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h5 className="card-price">INR&nbsp;{props.price}</h5>
                </div>
            </div>
            <div className='product-tile-button'>
                <button type="button" className="btn btn-dark add-to-cart-button" onClick={addToCartButtonClickHandler}>ADD TO CART</button>
            </div>
            <Modal show={modalShow} onHide={() => setModalShow(false)}
            modalheading="Product added to the cart" 
            modalsubheading={"Product ID: " + props.id} 
            modaldescription={<ModalProductCard title={props.title} price={props.price} image={props.image}/>}
            modalbuttontext={"Go to Cart"}
            navigatelink='/cart'/>
        </div>
    )
}

export default ProductCard;