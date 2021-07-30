import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Menu extends Component {
  render() {
    // const MenuLink = ({ label, to, activeWhenExact }) => {
    //   return (
    //     <Route
    //       path={to}
    //       exact={activeWhenExact}
    //       children={({ match }) => {
    //         const active = match ? "active abc" : "";

    //         return (
    //           <li>
    //             <Link to={to} className="my-link">
    //               {label}
    //             </Link>
    //           </li>
    //         );
    //       }}
    //     />
    //   );
    // };
    // <MenuLink label="Trang chủ" to="/" activeWhenExact={true} />
    //         <MenuLink label="About" to="/about" activeWhenExact={false} />
    //         <MenuLink label="Contact" to="/contact" activeWhenExact={false} />
    const menus = [
      {
        name: "Home Page",
        to: "/",
        exact: true,
      },
      {
        name: "About",
        to: "/about",
        exact: true,
      },
      {
        name: "Contact",
        to: "/contact",
        exact: true,
      },
      {
        name: "Login",
        to: "/login",
        exact: true,
      },
      {
        name: "Product List",
        to: "/products",
        exact: true,
      },
    ];
    return (
      <nav className="navbar navbar-inverse">
        <ul className="nav navbar-nav">
          {menus &&
            menus.map((menu, index) => {
              return (
                <li key={index}>
                  <NavLink to={menu.to} exact={menu.exact}>
                    {menu.name}
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </nav>
    );
  }
}

export default Menu;
