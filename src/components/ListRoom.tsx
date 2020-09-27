import React, { Component } from "react";
import RoomItem from "./RoomItem";

class ListRoom extends Component {
  render() {
    let danhSachRoom = [
      {
        name: "Miễn Phí tiền phòng",
        gender: ["Nam và Nữ"],
        acreage: 5,
        address: "Buôn Ma Thuột",
        kingOfRoom: "Phòng cho thuê",
        price: 14000000,
        hinhAnh:
          "https://bayleaf.s3.amazonaws.com/property-images%2F1600400744667_IMG_7317.HEIC",
      },
      {
        name: "Tất cả tiền chủ trọ bao phòng",
        gender: ["Nam và Nữ"],
        acreage: 5,
        address: "Nha Trang",
        kingOfRoom: "Phòng cho thuê",
        price: 14000000,
        hinhAnh:
          "https://bayleaf.s3.amazonaws.com/property-images%2F1600859287617_IMG_3838.HEIC",
      },
      {
        name: "Giá cao hết mức có thể",
        gender: ["Nam và Nữ"],
        acreage: 5,
        address: "Sài Gòn",
        kingOfRoom: "Phòng cho thuê",
        price: 14000000,
        hinhAnh:
          "https://bayleaf.s3.amazonaws.com/property-images%2F1598055910367_IMG_1594126506946_1598055796334.jpg",
      },
    ];
    localStorage.setItem("danhSachPhong", JSON.stringify(danhSachRoom));
    // localStorage.getItem('danhSachPhong');

    let data = localStorage.getItem("danhSachPhong");
    let dsphong = [];
    if (data != null) {
      dsphong = JSON.parse(data);
    }
    console.log(dsphong);

    return (
      <div className="listRoom">
        <div className="ketQua">
          <span className="fs-26">Kết quả</span>
        </div>
        {dsphong.map((item: any) => {
          return (
            <RoomItem
              roomName={item.name}
              diaChi={item.address}
              gia={item.acreage}
              kichThuoc={item.acreage}
              loaiPhong={item.kingOfRoom}
              hinhAnh={item.hinhAnh}
              gioiTinh={item.gender}
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
