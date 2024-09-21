import axios from "axios";
import { BASE_URL } from "../Utility/Constants";

export async function fetchAllProducts() {
  try {
    var products = await axios({
      url: BASE_URL + "/products",
      method: "GET",
    });
    if (
      products.status === 200 &&
      !products.data.error &&
      products.data.products.length > 0
    ) {
      return { error: false, products: products.data.products };
    }
    return { error: true };
  } catch (e) {
    return { error: true };
  }
}

export async function fetchProductWithId(id) {
  try {
    var product = await axios({
      url: BASE_URL + "/product/" + id,
      method: "GET",
    });
    if (product.status === 200 && !product.data.error && product.data.product) {
      return { error: false, product: product.data.product };
    }
    return { error: true };
  } catch (e) {
    return { error: true };
  }
}
