import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
const menus = [
  {
    name: "Trang chủ",
    to: "/",
    exact: true,
  },
  {
    name: "Quản lý sản phẩm",
    to: "/products",
    exact: false,
  },
];
const MenuLink = ({ label, to, activeWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeWhenExact}
      children={({ match }) => {
        return (
          <li className={match ? "active" : ""}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};
class Menu extends Component {
  render() {
    return (
      <div class="row">
        <nav class="navbar navbar-inverse">
          <a class="navbar-brand" href="#">
            Product List
          </a>
          <ul class="nav navbar-nav">
            {menus &&
              menus.map((menu, index) => {
                return (
                  <MenuLink
                    label={menu.name}
                    to={menu.to}
                    activeWhenExact={menu.exact}
                    key={index}
                  ></MenuLink>
                );
              })}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
