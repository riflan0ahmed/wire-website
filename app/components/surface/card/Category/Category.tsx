import Link from "next/link";
import classNames from "classnames/bind";
import classes from "./card.module.scss";

const cx = classNames.bind(classes);

type CardProps = {
  title: string;
  link: string;
  variant: "primary" | "secondary";
};

const CardCategory = ({ title, link, variant }: CardProps) => {
  return (
    <Link
      href={link}
      className={cx({
        category: true,
        "category--primary": variant === "primary",
        "category--secondary": variant === "secondary",
      })}
    >
      <h3 className={classes["category__title"]}>{title}</h3>
    </Link>
  );
};

export default CardCategory;
