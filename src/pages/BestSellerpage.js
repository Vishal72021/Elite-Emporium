import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BestSellerRow from "../components/BestSellerRow";
import bestSellerData from "../bestSellerData";

export default function BestSellerpage() {
  const bestSellerGroup = bestSellerData.map((item) => {
    return <BestSellerRow key={item.id} {...item} />;
  });
  return (
    <>
      <Header bestSellerColor="secondary" />
      <h1
        className="py-4 my-0 bg-dark text-warning"
        style={{ textAlign: "center" }}
      >
        Our The Best Ever Gadgets
      </h1>
      {bestSellerGroup}
      <Footer />
    </>
  );
}
