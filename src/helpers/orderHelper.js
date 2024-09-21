import {createOrder, handleOrderPayment} from '../services/orderFetchService';
import {removeBasketUUID} from './basketHelper';

export async function createOrderFromBasket(basket) {
    try {
        if (!basket) {
            return null;
        }
        var orderResponse = await createOrder(basket);
        if (orderResponse.error) {
            return null;
        }
        removeBasketUUID();
        return orderResponse.order;
    } catch(e) {
        return null;
    }
}

// function getOrder(orderNo) {
//     if (orderNo) {
//         var order = JSON.parse(localStorage.getItem(orderNo));
//         return order;
//     }
// }

export async function handlePayment(order) {
    try {
        if (!order) {
            return {success: false};
        }
        var orderResponse = await handleOrderPayment(order);
        if (!orderResponse.success) {
            return {success: false};
        }
        return {success: true};
    } catch(e) {
        return {success: false};
    }
}