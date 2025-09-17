// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </ScrollToTop>
  );
}
