import React, { Component } from "react";
import callApi from "../../utils/apiCall";

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
      callApi(`products/${id}`, "GET", null).then((res) => {
        const { data } = res;
        this.setState({
          id: data.id,
          txtName: data.name,
          txtPrice: data.price,
          status: data.status,
        });
      });
    }
  }
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
    event.preventDefault();
    if (id) {
      callApi(`products/${id}`, "PUT", {
        name: txtName,
        price: txtPrice,
        status: status,
      }).then((res) => {
        history.goBack();
      });
    } else {
      callApi("products", "POST", {
        name: this.state.txtName,
        price: this.state.txtPrice,
        status: this.state.status,
      }).then((res) => {
        history.push("/products");
      });
    }
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

export default ProductActionPage;
