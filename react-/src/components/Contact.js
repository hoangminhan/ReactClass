import React, { Component } from "react";
import { Prompt } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <div>
        Liên hệ với chúng tôi
        <button type="button" class="btn btn-default">
          Cho phép
        </button>
        <button type="button" class="btn btn-danger">
          Không cho phép
        </button>
        <Prompt
          when={true}
          message={(location) =>
            `Bạn có chắc chắn muốn đến ${location.pathname}`
          }
        />
      </div>
    );
  }
}

export default Contact;
