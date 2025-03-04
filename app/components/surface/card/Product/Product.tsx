import Image from "next/image";
import { memo } from "react";
import classes from "./card.module.scss";

import classNames from "classnames/bind";

const cx = classNames.bind(classes);

type CardProps = {
  title: string;
  price: number;
  description: string;
  category: "men's clothing" | "women's clothing";
  image: string;
};

const CardProduct = ({
  title,
  description,
  price,
  image,
  category,
}: CardProps) => {
  return (
    <div className={classes["product"]}>
      <div className={classes["product__inner"]}>
        <div className={classes["product__title"]}>{title}</div>

        <Image
          className={classes["product__image"]}
          placeholder="blur"
          blurDataURL={image}
          src={image}
          alt={title}
          width={150}
          height={150}
          priority
        />
      </div>

      <div
        className={`${cx({
          product__category: true,
          "product__category--men": category === "men's clothing",
          "product__category--women": category === "women's clothing",
        })}`}
      >
        <h3 className={classes["product__price"]}>Rs.{price}</h3>
        <p className={classes["product__description"]}>{description}</p>
      </div>
    </div>
  );
};

export default memo(CardProduct);
