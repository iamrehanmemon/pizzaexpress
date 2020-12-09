import React from "react";
import Products from "../../components/Products";
import { pizzaData } from "../../components/Products/data";

const PizzaPage = () => {
  return (
    <div>
      <Products heading="Pizzas" data={pizzaData} />
    </div>
  );
};

export default PizzaPage;
