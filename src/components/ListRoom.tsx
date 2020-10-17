
import React, { Component } from "react";
import RoomItem from "./RoomItem";

class ListRoom extends Component {
  render() {


    var data = localStorage.getItem("dsPhong");
    
   
      var dsphong = JSON.parse(data || '{}');
    
    console.log(dsphong);

    return (
      <div className="listRoom">
        <div className="ketQua">
          <span className="fs-26">Kết quả</span>
        </div>
        {dsphong.map((item: any) => {
          return (
            <RoomItem
              tieuDeDangBai={item.tieuDeDangBai}
              soNha={item.soNha}
              giaChoThue={item.giaChoThue}
              dienTich={item.dienTich}
              loaiPhong={item.loaiPhong}
              hinhAnhs={item.hinhAnh}
              gioiTinh={item.gioiTinh}
              datCoc={item.datCoc}
              free={item.free}
              noiDungMoTa={item.noiDungMoTa}
              phuong={item.phuong}
              quan={item.quan}
              soDienThoai={item.soDienThoai}
              soLuongPhong={item.soDienThoai}
              sucChua={item.sucChua}
              tenDuong={item.tenDuong}
              thanhPho={item.thanhPho}
              thoiGianDongCua={item.thoiGianDongCua}
              thoiGianMoCua={item.thoiGianMoCua}
              tienDien={item.tienDien}
              tienIchs={item.tienIchs}
            ></RoomItem>
          );
        })}

        {/* <RoomItem
              roomName={"Ban Nha"}
              diaChi={"Buon Me Thuot"}
              gia={50}
              gioiTinh={["Nam"]}
              kichThuoc={60}
              loaiPhong={"Phòng cho thuê"}
              hinhAnh={
                "https://scontent.fdad3-1.fna.fbcdn.net/v/t1.0-9/119841670_4471040589634628_6380201682574851778_o.jpg?_nc_cat=106&_nc_sid=110474&_nc_ohc=iV8u4jFN5OIAX8Jx3KE&_nc_ht=scontent.fdad3-1.fna&oh=b2941535acd449a646955cdb20c4e4ec&oe=5F8C9A4E"
              }
            ></RoomItem> */}
      </div>
    );
  }
}

export default ListRoom;
