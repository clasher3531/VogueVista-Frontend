import axios from "axios";
import { BASE_URL } from "../Utility/Constants";

export async function createOrder(basket) {
  try {
    var order = await axios({
      url: BASE_URL + "/order",
      method: "POST",
      data: {
        basket: basket,
      },
    });
    if (order.status === 201 && !order.data.error) {
      return { error: false, order: order.data.order };
    }
    return { error: true };
  } catch (e) {
    return { error: true };
  }
}

export async function handleOrderPayment(order) {
  try {
    var paymentResponse = await axios({
      url: BASE_URL + "/order/payment",
      method: "POST",
      data: {
        order: order,
      },
    });
    if (
      paymentResponse.status === 200 &&
      paymentResponse.data.success &&
      paymentResponse.data.responseCode === "AUTHORIZED"
    ) {
      return { success: true };
    }
    return { success: false };
  } catch (e) {
    return { success: false };
  }
}
