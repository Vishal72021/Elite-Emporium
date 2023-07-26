import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RegistrationHero from "../components/RegistrationHero";

export default function Registrationpage() {
  return (
    <>
      <Header />
      <div className="bg-warning">
        <RegistrationHero />
      </div>
      <Footer />
    </>
  );
}
