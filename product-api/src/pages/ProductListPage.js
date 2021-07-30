import React, { Component } from "react";
import ProductItem from "../components/ProductItem/ProductItem";
import ProductList from "../components/ProductList/ProductList";

class ProductListPage extends Component {
  componentDidMount = () => {
    this.props.handleFetchProducts();
  };
  render() {
    const { products } = this.props;

    return (
      <ProductList
        products={this.props.products}
        handleFetchProducts={this.props.handleFetchProducts}
        history={this.props.history}
      >
        {products &&
          products.map((product, index) => {
            return (
              <ProductItem
                index={index}
                product={product}
                handleDeleteProduct={this.props.handleDeleteProduct}
                handeGetProductEdit={this.props.handeGetProductEdit}
                history={this.props.history}
                handleUpdateProduct={this.props.handleUpdateProduct}
              />
            );
          })}
      </ProductList>
    );
  }
}

export default ProductListPage;
