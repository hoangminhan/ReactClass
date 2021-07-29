import React, { Component } from "react";
import { Route, Link, NavLink } from "react-router-dom";

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
const MenuLink = ({ label, to, activeOnlyWhenActive }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenActive}
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
      <nav class="navbar navbar-inverse">
        <a class="navbar-brand" href="#">
          Call Api
        </a>
        <ul class="nav navbar-nav">
          {menus &&
            menus.map((menu, index) => {
              return (
                <MenuLink
                  key={index}
                  label={menu.name}
                  to={menu.to}
                  activeOnlyWhenActive={menu.exact}
                />

                // <li>
                //   <NavLink
                //     to={menu.to}
                //     key={index}
                //     exact={menu.exact}
                //     activeStyle={{
                //       backgroundColor: "#ccc",
                //       height: "52px",
                //     }}
                //   >
                //     {menu.name}
                //   </NavLink>
                // </li>
              );
            })}
        </ul>
      </nav>
    );
  }
}

export default Menu;
