import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Cart from "./pages/cart";
import ContactUs from "./pages/contact_us";
import Products from "./pages/products";
import Categories from "./pages/categories";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact_us" element={<ContactUs />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}

export default App;