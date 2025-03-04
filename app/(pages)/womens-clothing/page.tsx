import getProducts from "@service/product";
import TProduct from "@type/product";
import CardProduct from "@components/surface/card/Product/Product";
import classes from "./page.module.scss";

export default async function PageWomen() {
  const data = await getProducts();
  const products = data.filter(
    (item: TProduct) => item.category === "women's clothing"
  );

  return (
    <div className={classes["women"]}>
      <div className={classes["women__inner"]}>
        <h2 className={classes["women__title"]}>Women&apos;s Clothing</h2>

        <div className={classes["women__products"]}>
          {!products.length ? (
            <div className={classes["women__alert"]}>
              <h3 className={classes["women__message"]}>No products found</h3>
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
