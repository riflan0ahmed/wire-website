import CardCategory from "@components/surface/card/Category/Category";
import CardProduct from "@components/surface/card/Product/Product";
import getProducts from "@service/product";
import TProduct from "@type/product";
import classes from "./page.module.scss";

export default async function Home() {
  const data = await getProducts();
  const products = data.slice(0, 8);

  return (
    <div className={classes["home"]}>
      <div className={classes["home__inner"]}>
        <h2 className={classes["home__title"]}>Flash Sale</h2>

        <div className={classes["home__products"]}>
          {!products.length ? (
            <div className={classes["home__alert"]}>
              <h3 className={classes["home__message"]}>No products found</h3>
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

      <div className={classes["home__inner"]}>
        <h2 className={classes["home__title"]}>Categories</h2>

        <div className={classes["home__categories"]}>
          <CardCategory
            title="Men's Clothing"
            link="/mens-clothing"
            variant="primary"
          />
          <CardCategory
            title="Women's Clothing"
            link="/womens-clothing"
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
}
