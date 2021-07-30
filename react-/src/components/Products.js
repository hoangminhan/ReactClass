import React, { Component } from "react";
import { NavLink, Route, useParams } from "react-router-dom";
import Product from "../Product";

class Products extends Component {
  render() {
    const products = [
      {
        id: 1,
        slug: "iphone",
        name: " iphoneX",
        price: 200000,
      },
      {
        id: 2,
        slug: "oppo",
        name: " Oppo",
        price: 100000,
      },
      {
        id: 3,
        slug: "nokia",
        name: " Nokia",
        price: 50000,
      },
    ];
    const { match } = this.props;
    console.log(match);
    // const { params } = useParams();
    // console.log(params);
    return (
      <div>
        <h2>Danh sách sản phẩm</h2>

        <div className="row">
          <ul className="list-group">
            {products &&
              products.map((product, index) => {
                return (
                  <NavLink key={index} to={`${match.url}/${product.slug}`}>
                    <li className="list-group-item">
                      {product.id} - {product.name} - {product.price}
                    </li>
                  </NavLink>
                );
              })}
          </ul>
        </div>
        <div className="row">
          <Route path="/products/:slug" component={Product} />
        </div>
      </div>
    );
  }
}

export default Products;
