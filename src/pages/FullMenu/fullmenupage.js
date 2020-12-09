import React from "react";

import Products from "../../components/Products";
import { allproducts } from "../../components/Products/data";

const FullMenu = () => {
  return (
    <div>
      <Products heading="Our Full Menu" data={allproducts} />
    </div>
  );
};

export default FullMenu;
