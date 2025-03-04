import { useQuery } from "@tanstack/react-query";
import getProducts from "../service/product";

// for client side
const useProducts = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => await getProducts(),
  });

  return { isLoading, data, error };
};

export default useProducts;
