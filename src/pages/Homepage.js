import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeWelcome from "../components/HomeWelcome";
import HomeCollage from "../components/HomeCollage";
import HomeProductCarousel from "../components/HomeProductCarousel";
import HomeFeatureGrid from "../components/HomeFeatureGrid";
import HomeBrandGrid from "../components/HomeBrandGrid";

export default function Homepage() {
  return (
    <>
      <Header homeColor="secondary" />
      <HomeWelcome />
      <div className="bg-warning">
        <HomeCollage />
      </div>
      <div className="bg-dark py-5">
        <h1 className="text-center bg-dark text-warning">
          Our Most Loved Products
        </h1>
        <HomeProductCarousel />
      </div>
      <HomeFeatureGrid />
      <div className="bg-secondary">
        <HomeBrandGrid />
      </div>
      <Footer />
    </>
  );
}
