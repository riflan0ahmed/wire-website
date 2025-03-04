import getProducts from "@service/product";
import TProduct from "@type/product";
import CardProduct from "@components/surface/card/Product/Product";
import classes from "./page.module.scss";

export default async function PageMen() {
  const data = await getProducts();
  const products = data.filter(
    (item: TProduct) => item.category === "men's clothing"
  );

  return (
    <div className={classes["men"]}>
      <div className={classes["men__inner"]}>
        <h2 className={classes["men__title"]}>Men&apos;s Clothing</h2>

        <div className={classes["men__products"]}>
          {!products.length ? (
            <div className={classes["men__alert"]}>
              <h3 className={classes["men__message"]}>No products found</h3>
            </div>
          ) : (
            products.map((item: TProduct) => (
              <CardProduct
                key={item.title}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
