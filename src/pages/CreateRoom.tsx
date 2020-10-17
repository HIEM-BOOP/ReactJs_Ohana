import { Search } from "@material-ui/icons";
import React, { Component } from "react";
import Filter from "../components/Filter";
import ListRoom from "../components/ListRoom";
import Menu from "../components/Menu";
import Form from "../components/Form";
import { type } from "os";


class CreateRoomPage extends Component {
  render() {
    return (
      <div className ="container">
        <Menu></Menu>
        <Form></Form>
        
        
      </div>
    );
  }
}


export default CreateRoomPage;
