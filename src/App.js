import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import {} from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import Homepage from "./pages/Homepage/homepage";
import FullMenu from "./pages/FullMenu/fullmenupage";
import PizzaPage from "./pages/PizzaPage/pizzapage";
import DesertMenuPage from "./pages/DesertMenuPage/desertpage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/fullmenu" component={FullMenu} />
        <Route exact path="/pizza" component={PizzaPage} />
        <Route exact path="/deserts" component={DesertMenuPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
