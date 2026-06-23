import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        FashionHub
      </NavLink>

      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/categories"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Categories
        </NavLink>

        <NavLink
          to="/contact_us"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Contact Us
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          🛒 Cart ({totalItems})
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;