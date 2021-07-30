import "./App.css";
import Menu from "./components/Menu/Menu";
import ProductListContainer from "./container/ProductListContainer/ProductListContainer";
import routes from "./routes";
import { Route, Switch, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div class="container-fluid">
        <Menu />

        <Switch>
          {routes &&
            routes.map((route, index) => {
              return (
                <Route
                  path={route.path}
                  exact={route.exact}
                  key={index}
                  component={route.main}
                />
              );
            })}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
