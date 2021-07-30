// Lên store lấy các state và truyền về cho product Component
import React, { Component } from "react";
import PropTypes from "prop-types";
import Cart from "./../components/Cart";
import CartResult from "./../components/CartResult";
import * as Message from "./../constants/Message";
import {
  deleteProduct,
  changeMessage,
  handleDeleteOneCart,
  handleAddOneCart,
} from "./../actions/index";

import { connect } from "react-redux";
import CartItem from "../components/CartItem";

class CartContainer extends Component {
  // showTotal = (cart)=>{
  //   let result = null
  //   cart.map((item,index)=>{
  //     return (

  //     )
  //   })

  render() {
    let { cart } = this.props;

    return (
      <Cart>
        {this.showCart(cart)}
        {<CartResult cart={this.showTotalPrice(cart)} />}
      </Cart>
    );
  }
  showTotalPrice = (cart) => {
    const result = cart.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);

    return result;
  };
  showCart = (cart) => {
    return cart.length > 0
      ? cart.map((item, index) => {
          return (
            <CartItem
              key={index}
              item={item}
              index={index}
              onDeleTeCart={this.props.onDeleTeCart}
              changeMessage={this.props.changeMessage}
              onDeleteOneCart={this.props.onDeleteOneCart}
              onAddOneCart={this.props.onAddOneCart}
            ></CartItem>
          );
        })
      : Message.MSG_CART_EMPTY;
  };
}

// CartContainer.propTypes = {
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.is,
//       name: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//       description: PropTypes.string.isRequired,
//       img: PropTypes.string.isRequired,
//       inventory: PropTypes.number.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// };

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onDeleTeCart: (id) => {
      dispatch(deleteProduct(id));
    },
    changeMessage: (message) => {
      dispatch(changeMessage(message));
    },
    onDeleteOneCart: (id) => {
      dispatch(handleDeleteOneCart(id));
    },
    onAddOneCart: (id) => {
      dispatch(handleAddOneCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
