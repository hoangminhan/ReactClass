import Cart from "./components/Cart";

import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import ProductContainer from "./containers/ProductContainer";
import CartContainer from "./containers/CartContainer";
import MessageContainer from "./containers/MessageContainer";

class App extends Component {
  render() {
    return (
      <div className="hidden-sn animated deep-purple-skin">
        <div>
          <Header />
          <main id="mainContainer">
            <div className="container">
              <ProductContainer />
              <MessageContainer />
              <CartContainer />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
