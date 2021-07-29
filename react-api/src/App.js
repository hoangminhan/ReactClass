import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import routes from "./routes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <div className="container">
          <div className="row">
            <Switch>
              {routes &&
                routes.map((route, index) => {
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      component={route.main}
                      exact={route.exact}
                    />
                  );
                })}
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
