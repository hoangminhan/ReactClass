// Lên store lấy các state và truyền về cho product Component
import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import Products from "../components/Products";
import Product from "./../components/Product";
import { buyProduct, changeMessage } from "./../actions/index";

class ProductContainer extends Component {
  render() {
    let { products } = this.props;
    return (
      <Products products={products}>
        {products.length > 0
          ? products.map((product, index) => {
              return (
                <Product
                  key={index}
                  product={product}
                  onAddToCart={this.props.onAddToCart}
                  onChangeMessage={this.props.onChangeMessage}
                />
              );
            })
          : ""}
      </Products>
    );
  }
}

ProductContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.is,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (product) => {
      dispatch(buyProduct(product, 1));
    },
    onChangeMessage: (message) => {
      dispatch(changeMessage(message));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
