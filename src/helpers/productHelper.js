import {fetchProductWithId} from '../services/productFetchService';

async function getProduct(id) {
    var response  = await fetchProductWithId(id);
    if (response.error) {
        return null
    }
    return response.product;
}

export default getProduct;