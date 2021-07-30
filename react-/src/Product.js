import React, { Component } from "react";

class Product extends Component {
  render() {
    const { match } = this.props;
    const { params } = match;
    console.log("slug", params);
    return <div>Chi tiết sản phẩm: {params.slug}</div>;
  }
}

export default Product;
