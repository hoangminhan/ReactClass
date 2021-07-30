import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Menu from "./components/Menu";

import routes from "./routes";

function App() {
  return (
    <Router>
      <div>
        {/* MENU */}
        <Menu />
        {/* Nội dung */}

        <Switch>
          {routes &&
            routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              );
            })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
