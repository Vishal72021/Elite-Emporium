import React from "react";
import ProductCard from "./ProductCard";
import Product1 from '../assets/products/product_1.jpg'
import Product2 from '../assets/products/product_2.jpg'
import Product3 from '../assets/products/product_3.jpg'
import Product4 from '../assets/products/product_4.jpg'
import Product5 from '../assets/products/product_5.jpg'
import Product6 from '../assets/products/product_6.jpg'
import Product7 from '../assets/products/product_7.jpg'
import Product8 from '../assets/products/product_8.jpg'
import Product9 from '../assets/products/product_9.jpg'
import Product10 from '../assets/products/product_10.jpg'
import Product11 from '../assets/products/product_11.jpg'
import Product12 from '../assets/products/product_12.jpg'

export default function ProductCardGroup(props) {
  return (
    <>
      <ProductCard
        card1color="white"
        bg1color="dark"
        card2color="dark"
        bg2color="white"
        heading1={props.group==='1'?"Tonal":"Bartesian"}
        subheading1=""
        heading2={props.group==='1'?"Hisense 75\" U800GR 8K ULED Roku TV":"Tempo Move"}
        subheading2=""
        image1={props.group==='1'?Product1:Product7}
        image2={props.group==='1'?Product2:Product8}
      />
      <ProductCard
        card1color="dark"
        bg1color="white"
        card2color="white"
        bg2color="primary"
        heading1={props.group==='1'?"Google - Pixel 6 Pro":"Apple M1 Macbook Pro"}
        subheading1=""
        heading2={props.group==='1'?"Oura Ring Generation 3":"VIVE Flow"}
        subheading2=""
        image1={props.group==='1'?Product3:Product9}
        image2={props.group==='1'?Product4:Product10}
      />
      <ProductCard
        card1color="white"
        bg1color="white"
        card2color="white"
        bg2color="white"
        heading1={props.group==='1'?"Dyson Purifier Humidify+Cool Formaldehyde":"Osma Pro pre-order"}
        subheading1=""
        heading2={props.group==='1'?"Nanoleaf Lines":"LARQ Pitcher PureVis™"}
        subheading2=""
        image1={props.group==='1'?Product5:Product11}
        image2={props.group==='1'?Product6:Product12}
      />
    </>
  );
}
