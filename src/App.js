import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";

import Hero from "./components/Hero";
import Products from "./components/Products";
import Feature from "./components/Feature";
import { productData, productDataTwo } from "./components/Products/data";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your Favourite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats For You" data={productDataTwo} />
    </Router>
  );
}

export default App;
