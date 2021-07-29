import React, { Component } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductList from "../../components/ProductList/ProductList";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actFetchProductRequest, asynDeleteProduct } from "../../actions/index";
import products from "../../reducer.js/productReducer";

class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  // gọi sau khi component render lần đầu tiên
  componentDidMount() {
    this.props.fetchAllProducts();
  }
  onDelete = (id) => {
    const { products } = this.state;
    // callApi(`products/${id}`, "DELETE", null).then((res) => {
    //   if (res.status === 200) {
    //     const newListProduct = products.filter((product) => {
    //       return product.id !== id;
    //     });
    //     this.setState({
    //       products: newListProduct,
    //     });
    //   }
    // });
    this.props.onDeleteProduct(id);
  };

  render() {
    let { products } = this.props;

    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link
          to="/product/add"
          className="btn btn-info"
          style={{ marginBottom: "10px" }}
        >
          Thêm sản phẩm
        </Link>

        <ProductList>{this.showProduct(products)}</ProductList>
      </div>
    );
  }
  showProduct = (products) => {
    const { history } = this.props;

    return (
      products &&
      products.map((product, index) => {
        return (
          <ProductItem
            index={index}
            key={index}
            product={product}
            onDelete={this.onDelete}
            history={history}
          />
        );
      })
    );
  };
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductRequest());
    },
    onDeleteProduct: (id) => {
      dispatch(asynDeleteProduct(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
