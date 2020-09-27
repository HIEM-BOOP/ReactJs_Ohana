import React, { Component } from "react";

class RoomItem extends Component<Props, {}> {
  render() {
    return (
      <div className="right_frame">
        <div id="showPhong">
          <div className="anhPhong">
            <img
              src= {this.props.hinhAnh}
              alt="#"
            />
          </div>
          <div className="thongTin">
            <div className="title">
              <p className="fs-20">
               {this.props.roomName}
              </p>
            </div>
            <div className="thongTinChiTiet">
              <div className="chiTietPhong">
                <div className="loaiPhong">
                  <i className="fas fa-home"></i>
    <span>{this.props.loaiPhong}</span>
                </div>
                <div className="gt_kichThuoc">
                  <div className="gioiTinh">
                    <i className="fas fa-venus-mars"></i>
    <span>{this.props.gioiTinh[0]}</span>
                  </div>
                  <div className="kichThuoc">
                    <i className="fas fa-ruler"></i>
    <span>{this.props.kichThuoc}m²</span>
                  </div>
                </div>
                <div className="diaChi">
                  <i className="fas fa-map-marker-alt"></i>
    <span>{this.props.diaChi}</span>
                </div>
              </div>
              <div className="gia">
    <span className="fs-48 ">{this.props.gia}</span>
                <span className="fs-20">tr/phòng</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
type Props = {
  roomName: string;
  loaiPhong: string;
  gioiTinh: string[];
  kichThuoc: number;
  diaChi: string;
  gia: number;
  hinhAnh : string;
};

export default RoomItem;
