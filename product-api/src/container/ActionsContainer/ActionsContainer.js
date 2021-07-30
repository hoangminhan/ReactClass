import React, { Component } from "react";
import ActionPage from "../../pages/ActionPage/ActionPage";
import { asyncAddProduct, asyncUpdateProduct } from "./../../actions/index";
import { connect } from "react-redux";

class ActionsContainer extends Component {
  render() {
    return (
      <ActionPage
        history={this.props.history}
        handleAddProduct={this.props.handleAddProduct}
        productEdit={this.props.productEdit}
        handleUpdateProduct={this.props.handleUpdateProduct}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    productEdit: state.productEdit,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleAddProduct: (product) => {
      dispatch(asyncAddProduct(product));
    },
    handleUpdateProduct: (product) => {
      dispatch(asyncUpdateProduct(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionsContainer);
