import React from "react";

import "./Aboutpage.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutGrid from "../components/AboutGrid";

export default function Aboutpage() {
  return (
    <>
      <Header aboutColor="secondary" />
      <AboutGrid />
      <Footer />
    </>
  );
}
