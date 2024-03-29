import React, { Component } from "react";

class CartResult extends Component {
  render() {
    const { cart } = this.props;
    return (
      <tr>
        <td colspan="3"></td>
        <td>
          <h4>
            <strong>Tổng Tiền</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>{cart}$</strong>
          </h4>
        </td>
        <td colspan="3">
          <button
            type="button"
            className="btn btn-primary waves-effect waves-light"
          >
            Complete purchase
            <i className="fa fa-angle-right right"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default CartResult;
