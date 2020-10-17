import React, { Component } from "react";
import Menu from "../components/Menu";
import Picture from "../components/Picture";
import Information from "../components/Information";
import Footer from "../components/Footer";
import InformationMater from "../components/InformationMaster";

class DetailRoomPage extends Component {
  render() {
    var data = localStorage.getItem("dsPhong");

    var dsphong = JSON.parse(data || "[]");
    var phongHienThi = dsphong[0];
    
    console.log(phongHienThi);

    return (
      <div className="deTailRoom">
        <Menu></Menu>
        <Picture
          hinhAnhs={phongHienThi.hinhAnh}
          tieuDeDangBai={phongHienThi.tieuDeDangBai}
        ></Picture>
        <Information></Information>
        <Footer></Footer>
      </div>
    );
  }
}

export default DetailRoomPage;
