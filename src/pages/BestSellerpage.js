import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BestSellerRow from "../components/BestSellerRow";

export default function BestSellerpage() {
  return (
    <>
      <Header bestSellerColor="secondary" />
        <h1 className="py-4 my-0 bg-dark text-warning" style={{ textAlign: "center" }}>
          Our The Best Ever Gadgets
        </h1>
        <BestSellerRow group="1" bgcolor='dark' color='warning'/>
        <BestSellerRow group="2" bgcolor='warning' color='dark'/>
        <BestSellerRow group="3" bgcolor='dark' color='warning'/>
        <BestSellerRow group="4" bgcolor='warning' color='dark'/>
      <Footer />
    </>
  );
}
