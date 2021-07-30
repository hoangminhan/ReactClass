import React, { Component } from "react";
import {
  asyncProduct,
  asyncDeleteProduct,
  asyncEditProduct,
} from "../../actions";
import ProductListPage from "../../pages/ProductListPage";
import { connect } from "react-redux";

class ProductListContainer extends Component {
  render() {
    return (
      <ProductListPage
        products={this.props.products}
        handleFetchProducts={this.props.handleFetchProducts}
        history={this.props.history}
        handleDeleteProduct={this.props.handleDeleteProduct}
        handeGetProductEdit={this.props.handeGetProductEdit}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleFetchProducts: () => {
      dispatch(asyncProduct());
    },
    handleDeleteProduct: (id) => {
      dispatch(asyncDeleteProduct(id));
    },
    handeGetProductEdit: (product) => {
      dispatch(asyncEditProduct(product));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);
