import { NavLink } from "react-router-dom";

const Navbar = () => {
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
          🛒 Cart
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;