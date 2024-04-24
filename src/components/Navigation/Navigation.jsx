import css from "./Navigation.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function Navigation() {
  return (
    <nav className={"nav"}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/about" className={buildLinkClass}>
        About
      </NavLink>
      <NavLink to="/products" className={buildLinkClass}>
        Products
      </NavLink>
    </nav>
  );
}

export default Navigation;
