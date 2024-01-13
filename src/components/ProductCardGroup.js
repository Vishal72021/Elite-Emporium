import React from "react";
import ProductCard from "./ProductCard";
import productData from "../productData";

export default function ProductCardGroup(props) {
  const productCardGroup = productData.map((item) => {
    return <ProductCard key={item.id} {...item} />;
  });
  return (
    <>
      <div className="bg-warning">{productCardGroup}</div>
    </>
  );
}
