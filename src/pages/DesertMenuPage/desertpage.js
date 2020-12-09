import React from "react";

import Products from "../../components/Products";
import { sweetData } from "../../components/Products/data";

const DesertPage = () => {
  return (
    <div>
      <Products heading="Deserts" data={sweetData} />
    </div>
  );
};

export default DesertPage;
