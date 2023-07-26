import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import Products from "./pages/Productpage";
import BestSellers from "./pages/BestSellerpage";
import MemberShip from "./pages/Membershippage";
import Contact from "./pages/Contactpage";
import About from "./pages/Aboutpage";
import Login from "./pages/Loginpage";
import Register from "./pages/Registrationpage";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/emporium-products" element={<Products />}></Route>
          <Route
            exact
            path="/elite-best-sellers"
            element={<BestSellers />}
          ></Route>
          <Route exact path="/buy-elite-pro" element={<MemberShip />}></Route>
          <Route exact path="/our-contact" element={<Contact />}></Route>
          <Route exact path="/about-team" element={<About />}></Route>
          <Route exact path="/login-to-website" element={<Login />}></Route>
          <Route
            exact
            path="/register-for-account"
            element={<Register />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}
