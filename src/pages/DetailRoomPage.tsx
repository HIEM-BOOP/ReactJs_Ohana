import React, { Component } from "react";
import Menu from "../components/Menu";
import Picture from "../components/Picture";
import Information from "../components/Information";
import Footer from "../components/Footer";
import PopUp from "../components/PopUp";


class DetailRoomPage extends Component {
  render() {
    var data = localStorage.getItem("dsPhong");

    var dsphong = JSON.parse(data || "[]");
    var phongHienThi = dsphong[0];

    
    return (
      <div className="deTailRoom">
        <Menu></Menu>
        <Picture
          hinhAnhs={phongHienThi.hinhAnh}
          tieuDeDangBai={phongHienThi.tieuDeDangBai}
          ></Picture>
        <Information></Information>
        <Footer></Footer>
        <PopUp></PopUp>
      </div>
    );
  }
}

export default DetailRoomPage;
