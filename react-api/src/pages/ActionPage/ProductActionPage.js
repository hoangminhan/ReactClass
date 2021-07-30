import React, { Component } from "react";
import callApi from "../../utils/apiCall";
import { connect } from "react-redux";
import {
  asynAddProduct,
  asynUpdateProduct,
  asynEditProduct,
} from "./../../actions/index";
import products from "../../reducer.js/productReducer";

class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      status: false,
    };
  }
  componentDidMount() {
    const { match } = this.props;

    if (match) {
      const id = match.params.id;
      this.props.onEditProduct(id);

      // callApi(`products/${id}`, "GET", null).then((res) => {
      //   const { data } = res;
      //   this.setState({
      //     id: data.id,
      //     txtName: data.name,
      //     txtPrice: data.price,
      //     status: data.status,
      //   });
      // });
    }
  }
  componentWillReceiveProps = (netProps) => {
    // const { itemEdit } = this.props;
    // console.log(this.props.itemEdit);
    if (netProps && netProps.itemEdit) {
      this.setState(
        {
          id: netProps.itemEdit.id,
          txtName: netProps.itemEdit.name,
          txtPrice: netProps.itemEdit.price,
          status: netProps.itemEdit.status,
        },
        () => {
          console.log(this.state);
        }
      );
    }
    console.log("recieve props");
  };
  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    const { history } = this.props;
    const { id, txtName, txtPrice, status } = this.state;
    const product = { name: txtName, price: txtPrice, status: status };
    const productUpdate = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: status,
    };

    event.preventDefault();
    if (id) {
      // callApi(`products/${id}`, "PUT", {
      //   name: txtName,
      //   price: txtPrice,
      //   status: status,
      // }).then((res) => {
      //   history.goBack();
      // });
      this.props.onUpdateProduct(productUpdate);
    } else {
      // callApi("products", "POST", {
      //   name: this.state.txtName,
      //   price: this.state.txtPrice,
      //   status: this.state.status,
      // }).then((res) => {
      //   history.push("/products");
      // });
      this.props.onAddProduct(product);
    }
    history.push("/products");
  };
  render() {
    const { txtName, txtPrice, status } = this.state;
    const { history } = this.props;
    return (
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label>Tên sản phẩm</label>
            <input
              type="text"
              class="form-control"
              id=""
              placeholder="Input field"
              name="txtName"
              value={txtName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div class="form-group">
            <label>Giá</label>
            <input
              type="text"
              class="form-control"
              id=""
              placeholder="Input field"
              name="txtPrice"
              onChange={this.handleChange}
              value={txtPrice}
              required
            />
          </div>
          <div class="form-group">
            <label for="">Trạng thái</label>
          </div>

          <div class="checkbox">
            <label>
              <input
                type="checkbox"
                value=""
                name="status"
                value={status}
                onChange={this.handleChange}
                checked={status}
              />
              Còn hàng
            </label>
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>

          <button
            type="button"
            class="btn btn-default"
            onClick={() => history.goBack()}
          >
            Back
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    itemEdit: state.editProduct,
  };
};
const mapDipstachToProps = (dispatch) => {
  return {
    onAddProduct: (product) => {
      dispatch(asynAddProduct(product));
    },
    onUpdateProduct: (product) => {
      dispatch(asynUpdateProduct(product));
    },
    onEditProduct: (id) => {
      dispatch(asynEditProduct(id));
    },
  };
};

export default connect(mapStateToProps, mapDipstachToProps)(ProductActionPage);
