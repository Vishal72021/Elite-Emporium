import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginHero from "../components/LoginHero";

export default function Loginpage() {
  return (
    <>
      <Header />
      <div className="bg-warning">
        <LoginHero />
      </div>
      <Footer />
    </>
  );
}
