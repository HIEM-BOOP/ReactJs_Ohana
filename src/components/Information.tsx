import React, { Component } from "react";
import InformationRoom from "../components/informationRoom";
import InformationMaster from "../components/InformationMaster";
class Information extends Component {
  render() {
    var data = localStorage.getItem("dsPhong");
    var dsphong = JSON.parse(data || "[]");
    var phongHienThi = dsphong[0];

    console.log(phongHienThi);
    return (
      <div className="Information">
        <InformationRoom
        tienIchs ={phongHienThi.tienIch}
        noiDungMoTa ={phongHienThi.noiDungMoTa}
        gioiTinh={phongHienThi.gioiTinh} 
        gia={phongHienThi.gia}
        datCoc={phongHienThi.datCoc}
        diaChi={phongHienThi.diaChi}
        dien={phongHienThi.dien}
        nuoc={phongHienThi.nuoc}
        dienTich={phongHienThi.dienTich}
        sucChua={phongHienThi.sucChua}
        tinhTrang={phongHienThi.tinhTrang}
        wifi={phongHienThi.wifi}

        ></InformationRoom>
        <InformationMaster></InformationMaster>
      </div>
    );
  }
}

export default Information;
