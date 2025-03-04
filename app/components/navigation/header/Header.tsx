import Link from "next/link";
import classes from "./element.module.scss";

const Header = () => {
  return (
    <header className={classes["header"]}>
      <Link href="/" className={classes["header__title"]}>
        Modern Walk
      </Link>
    </header>
  );
};

export default Header;
