import React, { Component } from "react";

class ProductItem extends Component {
  hanldeDelete = (id) => {
    if (window.confirm("Bạn có thực sự muốn xoá không?")) {
      this.props.handleDeleteProduct(id);
    }
  };
  handleEdit = (product) => {
    this.props.handeGetProductEdit(product);
    this.props.history.push(`/product/${product.id}/edit`);
  };
  render() {
    const { index, product } = this.props;
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
            class="btn btn-warning"
            style={{ marginRight: "10px" }}
            onClick={() => this.handleEdit(product)}
          >
            Sửa
          </button>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => this.hanldeDelete(product.id)}
          >
            Xoá
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
