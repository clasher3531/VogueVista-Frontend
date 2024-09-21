import axios from "axios";
import { BASE_URL } from "../Utility/Constants";

export async function fetchBasket(id) {
  try {
    var basket = await axios({
      url: BASE_URL + "/basket/" + id,
      method: "GET",
    });
    if (basket.status === 200 && !basket.data.error && basket.data.basket) {
      return { error: false, basket: basket.data.basket };
    }
    return { error: true };
  } catch (e) {
    return { error: true };
  }
}

export async function fetchAndCreateBasket(basketUUID) {
  try {
    var basket = await axios({
      url: BASE_URL + "/basket",
      method: "POST",
      data: {
        basketUUID: basketUUID,
      },
    });
    if (basket.status === 200 && !basket.data.error && basket.data.basket) {
      return { error: false, basket: basket.data.basket };
    }
    return { error: true };
  } catch (e) {
    return { error: true };
  }
}

export async function addProduct(pid, basketUUID) {
  try {
    var basket = await axios({
      url: BASE_URL + "/basket/addProduct",
      method: "POST",
      data: {
        pid: pid,
        basketUUID: basketUUID,
      },
    });
    if (basket.status === 200 && !basket.data.error && basket.data) {
      return { error: false, basket: basket.data };
    }
    return { error: true };
  } catch (e) {
    return { error: true };
  }
}

export async function removeProduct(pid, basketUUID) {
  try {
    var basket = await axios({
      url: BASE_URL + "/basket/removeProduct",
      method: "POST",
      data: {
        pid: pid,
        basketUUID: basketUUID,
      },
    });
    if (basket.status === 200 && !basket.data.error && basket.data) {
      return { error: false, basket: basket.data };
    }
    return { error: true };
  } catch (e) {
    return { error: true };
  }
}

export async function updateBasket(data) {
  try {
    var basket = await axios({
      url: BASE_URL + "/basket",
      method: "PATCH",
      data: data,
    });
    if (basket.status === 200 && !basket.data.error && basket.data) {
      return { error: false, basket: basket.data };
    }
    return { error: true };
  } catch (e) {
    return { error: true };
  }
}

export async function updateShippingMethod(data) {
  try {
    var basket = await axios({
      url: BASE_URL + "/basket/updateShippingMethod",
      method: "POST",
      data: data,
    });
    if (basket.status === 200 && !basket.data.error && basket.data) {
      return { error: false, basket: basket.data };
    }
    return { error: true };
  } catch (e) {
    return { error: true };
  }
}
