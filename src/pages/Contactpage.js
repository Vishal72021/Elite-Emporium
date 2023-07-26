import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCustCol from "../components/ContactCustCol";
import ContactOrgCol from "../components/ContactOrgCol";

export default function Contactpage() {
  return (
    <>
      <Header contactColor="secondary" />
      <div className="bg-warning py-2">
        <div className="container my-4">
          <div className="row g-5">
            <ContactCustCol />
            <ContactOrgCol />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
