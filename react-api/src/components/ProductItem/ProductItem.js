import React, { Component } from "react";

class ProductItem extends Component {
  handleDelete = (id) => {
    console.log(id);
    if (window.confirm("Bạn chắc chắn có muốn xoá không")) {
      this.props.onDelete(id);
    }
  };
  render() {
    const { product, index, history } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>

        <td>
          <span
            class={
              product.status ? "label label-success" : "label label-danger"
            }
          >
            {product.status ? "Còn hàng" : "Hết hàng"}
          </span>
        </td>
        <td>
          <button
            type="button"
            class="btn btn-success"
            onClick={() => history.push(`/product/${product.id}/edit`)}
          >
            Sửa
          </button>
          <button
            type="button"
            class="btn btn-danger"
            style={{ marginLeft: "10px" }}
            onClick={() => this.handleDelete(product.id)}
          >
            Xoá
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
