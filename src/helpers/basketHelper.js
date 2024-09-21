import {fetchBasket, addProduct, removeProduct, updateBasket, updateShippingMethod} from '../services/basketFetchService';
import Cookies from 'universal-cookie';

export function getBasketUUID() {
    var cookies = new Cookies();
    return cookies.get('basketUUID');
}

export function setBasketUUID(id) {
    var cookies = new Cookies();
    cookies.set('basketUUID', id);
}

export function removeBasketUUID() {
    var cookies = new Cookies();
    cookies.remove('basketUUID');
}

export async function getBasket() {
    var basketUUID = getBasketUUID();
    if (!basketUUID) {
        return null;
    }
    var basketResponse = await fetchBasket(basketUUID);
    if (basketResponse.error) {
        return null
    }
    return basketResponse.basket;
}

export async function addProductToBasket(product) {
    var basketUUID = getBasketUUID()
    var basketResponse = await addProduct(product.id, basketUUID ? basketUUID : null);
    if (basketResponse.error) {
        return null
    }
    setBasketUUID(basketResponse.basket._id);
    return basketResponse.basket;
}

export async function removeProductFromBasket(pid) {
    var basketUUID = getBasketUUID();
    var basketResponse = await removeProduct(pid, basketUUID ? basketUUID : null);
    if (basketResponse.error) {
        return null
    }
    return basketResponse.basket;
}

export async function setBasketShippingAddress(shippingAddress) {
    if (shippingAddress === null) {
        return null;
    }
    var shippingAddressData = {
        updates: {
            shippingAddress: shippingAddress
        },
        basketUUID: getBasketUUID()
    }
    var updatedBasket = updateBasket(shippingAddressData)
    if (!updatedBasket) {
        return null
    }
    return updatedBasket;
}

export async function setEmailAddress(email) {
    if (!email) {
        return null;
    }
    var emailData = {
        updates: {
            email: email
        },
        basketUUID: getBasketUUID()
    }
    var updatedBasket = updateBasket(emailData);
    if (!updatedBasket) {
        return null
    }
    return updatedBasket;
}

export function validateShippingAddress() {
    var currentBasket = getBasket();
    if (currentBasket === null || currentBasket.shippingAddress === null || currentBasket.email === null) {
        return false;
    } else {
        var shippingAddress = currentBasket.shippingAddress;
        if (shippingAddress.title === null || shippingAddress.firstName === null || shippingAddress.lastName === null || shippingAddress.city === null || shippingAddress.zip === null || shippingAddress.state === null || shippingAddress.address1 === null) {
            return false;
        } else {
            return true;
        }
    }
}

export async function shippingMethodChangeNetPrice(data) {
    if (!data) {
        return null
    }
    data.basketUUID = getBasketUUID();
    var updatedBasket = updateShippingMethod(data);
    if (!updatedBasket) {
        return null
    }
    return updatedBasket;
}

export async function copyShippingAddressToBilling(data) {
    if (!data) {
        return null;
    }
    var billingData = {
        updates: {
            billingAddress: data
        },
        basketUUID: getBasketUUID()
    }
    var updatedBasket = updateBasket(billingData)
    if (!updatedBasket) {
        return null
    }
    return updatedBasket;
}

export async function setPaymentInformation(data) {
    if (!data) {
        return null;
    }
    var paymentData = {
        updates: {
            payment: data
        },
        basketUUID: getBasketUUID()
    }
    var updatedBasket = updateBasket(paymentData)
    if (!updatedBasket) {
        return null
    }
    return updatedBasket;
}