import React, { Component } from "react";
import Menu from "../components/Menu";
import Form from "../components/Form";
import { type } from "os";

class CreateRoomPage extends Component {
  render() {
    return (
      <div className="container">
        <Menu></Menu>
        <Form></Form>
      </div>
    );
  }
}

export default CreateRoomPage;
