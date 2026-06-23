import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Cart from "./pages/cart";
import ContactUs from "./pages/contact_us";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/categories";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/contact_us" element={<ContactUs />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
    <Footer />
    </>
    
  );
}

export default App;