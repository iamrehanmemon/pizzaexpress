import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./globalStyle";

import Homepage from "./pages/Homepage/homepage";

import Footer from "./components/Footer";
import Products from "./components/Products";

import { allproducts, pizzaData, sweetData } from "./components/Products/data";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route
          exact
          path="/fullmenu"
          component={() => (
            <Products heading="Our Full Menu" data={allproducts} />
          )}
        />
        <Route
          exact
          path="/pizza"
          component={() => <Products heading="Pizzas" data={pizzaData} />}
        />
        <Route
          exact
          path="/deserts"
          component={() => <Products heading="Deserts" data={sweetData} />}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
