import axios from "axios";
import TProduct from "../types/product";

const getProducts = async () => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Filter products by category
    const products = res.data.filter(
      (product: TProduct) =>
        product.category === "men's clothing" ||
        product.category === "women's clothing"
    );

    // Sort products by id in descending order
    const sortedProducts = products.sort(
      (a: TProduct, b: TProduct) => b.id - a.id
    );

    return sortedProducts;
  } catch (error) {
    console.log("Error getProducts:", error);
  }
};

export default getProducts;
