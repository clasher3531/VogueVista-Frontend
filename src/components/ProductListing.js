import ProductCard from './Product/ProductCard';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/ProductList.css'
import {fetchAllProducts} from '../services/productFetchService';

function ProductListing(props) {
    var [products, setProducts] = React.useState([]);
    function getProductData(category) {
        fetchAllProducts().then((productResponse) => {
            if (productResponse.error && (!productResponse.error && productResponse.products.length === 0)) {
                return setProducts([]);
            }
            if (category !== 'All Products') {
                var prodToDisplay = productResponse.products.filter(function(product) {
                    return product.category === category.toLowerCase();
                });
                setProducts(prodToDisplay);
            } else {
                setProducts(productResponse.products)
            }
        }).catch((e) => {
            setProducts([]);
        })
    }
    React.useEffect(function() {
        getProductData(props.category);
    }, [props.category])
    return (
        <div className='productListing'>
            <h2>{props.category}</h2>
            <Row>
                {products.map((product) => {
                    return <Col xs={6} sm={6} md={6} lg={3} key={product.id}><ProductCard id={product.id} image={product.image} title={product.title} description={product.description} price={product.price}/></Col>
                })}
            </Row>
        </div>
        
    )
}

export default ProductListing;