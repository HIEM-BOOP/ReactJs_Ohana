import React, { Component } from "react";

class RoomItem extends Component<Props, {}> {
  render() {
    
    
    return (
      <div className="right_frame">
        <div id="showPhong">
          <div className="anhPhong">
            <img src={this.props.hinhAnhs[0].link} alt="#" />
          </div>
          <div className="thongTin">
            <div className="title">
              <p className="fs-20">{this.props.tieuDeDangBai}</p>
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
                    <span>{this.props.gioiTinh}</span>
                  </div>
                  <div className="kichThuoc">
                    <i className="fas fa-ruler"></i>
                    <span>{this.props.dienTich}m²</span>
                  </div>
                </div>
                <div className="diaChi">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{this.props.soNha}</span>
                </div>
              </div>
              <div className="gia">
                <span className="fs-48 ">{this.props.giaChoThue}</span>
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
  loaiPhong: string;
  soLuongPhong: number;
  sucChua: number;
  gioiTinh: string;
  dienTich: number;
  giaChoThue: number;
  datCoc: number;
  tienDien: number;
  thanhPho: string;
  quan: string;
  phuong: string;
  tenDuong: string;
  soNha: string;
  hinhAnhs: hinhAnh[];
  tienIchs: tienIch[];
  soDienThoai: string;
  tieuDeDangBai: string;
  noiDungMoTa: string;
  thoiGianMoCua: string;
  thoiGianDongCua: string;
  free: boolean;
};
type tienIch = {
  icon: string;
  title: string;
  ischeck: boolean;
};
type hinhAnh = {
  name: string;
  link: string;
  placeholder: string;
};
export default RoomItem;
