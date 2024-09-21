import React from "react";
import HeroCarousel from "./HeroMain";
import WhyShoppingUs from "./HomePage/WhyShoppingUs";
import NewArrivals from "./HomePage/NewArrivals";
import FeaturedProducts from "./HomePage/FeaturedProducts";
import DiscoverProducts from "./HomePage/DiscoverProducts";
import "../css/HomePage.css";

function HomePage() {
  return (
    <div className="homePage">
      <HeroCarousel />
      <WhyShoppingUs />
      <NewArrivals />
      <FeaturedProducts />
      <DiscoverProducts />
    </div>
  );
}

export default HomePage;
