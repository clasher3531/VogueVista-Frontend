import React from "react";
import HeroCarousel from "./HeroMain";
import WhyShoppingUs from "./WhyShoppingUs";
import NewArrivals from "./NewArrivals";
import FeaturedProducts from "./FeaturedProducts";
import DiscoverProducts from "./DiscoverProducts";
import "../../css/HomePage.css";

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
