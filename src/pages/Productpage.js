import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductHero from "../components/ProductHero";
import ProductCardGroup from "../components/ProductCardGroup";

import "./Productpage.css";

export default function Products() {
  return (
    <>
      <Header productColor="secondary" />
      <ProductHero />
      <main>
        <ProductCardGroup group="1" />
        <ProductCardGroup group="2" />
      </main>
      <Footer />
    </>
  );
}
