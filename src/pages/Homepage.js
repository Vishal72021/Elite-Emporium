import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Welcome from "../components/HomeWelcome";
import Collage from "../components/HomeCollage";
import Carousel from "../components/HomeCarousel";
import FeatureGrid from "../components/HomeFeatureGrid";
import BrandGrid from "../components/HomeBrandGrid";

export default function Homepage() {
  return (
    <>
      <Header homeColor="secondary" />
      <Welcome />
      <div className="bg-warning">
        <Collage />
      </div>
      <div className="bg-dark py-5">
        <h1 className="text-center bg-dark text-warning">
          Our Most Loved Products
        </h1>
        <Carousel />
      </div>
      <FeatureGrid />
      <div className="bg-secondary">
        <BrandGrid />
      </div>
      <Footer />
    </>
  );
}
