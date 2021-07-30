import React, { Component } from "react";
import ProductItem from "../ProductItem/ProductItem";

class ProductList extends Component {
  render() {
    const { history } = this.props;
    return (
      <div class="row">
        <div class="container">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <button
              type="button"
              class="btn btn-primary"
              style={{ marginBottom: "10px" }}
              onClick={() => history.push("/product/add")}
            >
              Thêm công việc
            </button>

            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">Danh sách các sản phẩm</h3>
              </div>
              <div class="panel-body">
                <table class="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Mã sản phẩm</th>
                      <th>Tên sản phẩm</th>
                      <th>Giá</th>
                      <th>Trạng thái</th>
                      <th>Hành động</th>
                    </tr>
                  </thead>
                  <tbody>{this.props.children}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
