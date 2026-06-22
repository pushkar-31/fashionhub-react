import { Link } from "react-router-dom";

const Navbar = () => {
   return ( <nav>
        <h2> Navbar</h2>
        <div>
            <Link to="/">home</Link>
            <Link to="/categories">categories</Link>
            <Link to="/contact_us">contact_us</Link>
            <Link to="/cart">🛒cart</Link>
        </div>
    </nav>
   );
};

export default Navbar;