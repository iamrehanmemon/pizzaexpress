import React from "react";
import Hero from "../../components/Hero";
import Products from "../../components/Products";
import Feature from "../../components/Feature";
import { productData, productDataTwo } from "../../components/Products/data";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Products heading="Choose your Favourite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats For You" data={productDataTwo} />
    </div>
  );
};
export default Homepage;
