import React, { Component } from "react";
import {
  MSG_DELETE_CART_SUCCESS,
  MSG_ADD_CART_SUCCESS,
} from "./../constants/Message";

class CartItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <tr>
        <th scope="row">
          <img src={item.product.img} alt="" className="img-fluid z-depth-0" />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}</td>
        <td className="center-on-small-only">
          <span className="qty">{item.quantity}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="
                      btn btn-sm btn-primary btn-rounded
                      waves-effect waves-light
                    "
              onClick={() => this.handleDeleteOneCart(item.product.id)}
            >
              <a>—</a>
            </label>
            <label
              className="
                      btn btn-sm btn-primary btn-rounded
                      waves-effect waves-light
                    "
              onClick={() => this.handleAddOneCart(item.product.id)}
            >
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{this.showTotalPrice(item.product.price, item.quantity)}</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => this.handleDelete(item.product.id)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
  showTotalPrice = (price, quantity) => {
    return ` ${price * quantity}$`;
  };
  handleDelete = (idProduct) => {
    this.props.onDeleTeCart(idProduct);
    this.props.changeMessage(MSG_DELETE_CART_SUCCESS);
  };
  handleDeleteOneCart = (id) => {
    this.props.onDeleteOneCart(id);
    this.props.changeMessage(MSG_DELETE_CART_SUCCESS);
  };
  handleAddOneCart = (id) => {
    this.props.onAddOneCart(id);
    this.props.changeMessage(MSG_ADD_CART_SUCCESS);
  };
}

export default CartItem;
