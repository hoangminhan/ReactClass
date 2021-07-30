import React, { Component } from "react";

class ActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: "",
      status: false,
    };
  }
  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };
  componentWillReceiveProps = (nextProps) => {
    const { productEdit } = nextProps;
    console.log(productEdit);
    if (nextProps) {
      this.setState({
        id: productEdit.id,
        name: productEdit.name,
        price: productEdit.price,
        status: productEdit.status,
      });
    }
  };

  handleSubmit = (event) => {
    const { id } = this.state;
    const { history } = this.props;

    event.preventDefault();
    if (id) {
      debugger;
      this.props.handleUpdateProduct(this.state);
    } else {
      this.props.handleAddProduct(this.state);
    }
    history.goBack();
  };

  render() {
    const { name, price, status, id } = this.state;
    const { history } = this.props;
    console.log(history);
    return (
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.handleSubmit}>
          <legend>{id ? "Sửa sản phẩm" : "Thêm sản phẩm"}</legend>

          <div class="form-group">
            <label for="">Tên sản phẩm</label>
            <input
              type="text"
              class="form-control"
              id=""
              placeholder="Input field"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div class="form-group">
            <label for="">Giá</label>
            <input
              type="text"
              class="form-control"
              id=""
              placeholder="Input field"
              onChange={this.handleChange}
              value={price}
              name="price"
            />
          </div>
          <div class="form-group">
            <label for="">Trạng thái</label>
          </div>

          <div class="checkbox">
            <label>
              <input
                checked={status}
                type="checkbox"
                value={status}
                onChange={this.handleChange}
                name="status"
              />
              Còn hàng
            </label>
          </div>

          <button type="submit" class="btn btn-primary">
            {id ? "Update" : "Submit"}
          </button>
          <button
            type="button"
            class="btn btn-success"
            onClick={() => history.goBack()}
          >
            Back
          </button>
        </form>
      </div>
    );
  }
}

export default ActionPage;
