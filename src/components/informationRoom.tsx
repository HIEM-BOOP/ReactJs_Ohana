import { type } from "os";
import React, { Component } from "react";

class informationRoom extends Component<Props, State> {
  render() {
    return (
      <div className="thongTinPhong">
        <div className="item">
          <div className="khungTitle">
            <div className="icon">
              <i className="fas fa-home" />
            </div>
            <div className="khungTitle">
              <span className="fs-24">Thông Tin Phòng</span>
            </div>
          </div>
          <div className="cacChiTiet">
            <div className="detail">
              <div className="tt">
                <p className="fs-16">Giá</p>
                <p className="fs-16">{this.props.gia}</p>
              </div>
            </div>
            <div className="detail">
              <p className="fs-16">Diện Tích</p>
              <p className="fs-16">{this.props.dienTich} mét vuông</p>
            </div>
            <div className="detail">
              <p className="fs-16">Đặt cọc</p>
              <p className="fs-16">{this.props.datCoc} Tháng</p>
            </div>
            <div className="detail">
              <p className="fs-16">Sức Chứa</p>
              <p className="fs-16">{this.props.sucChua}</p>
            </div>
            <div className="detail">
              <p className="fs-16">Điện</p>
              <p className="fs-16">{this.props.dien}</p>
            </div>
            <div className="detail">
              <p className="fs-16">Nước</p>
              <p className="fs-16">{this.props.nuoc} đồng</p>
            </div>
            <div className="detail">
              <p className="fs-16">Wifi</p>
              <p className="fs-16">Miễn Phí</p>
            </div>
            <div className="detail">
              <p className="fs-16">Tình Trạng</p>
              <p className="fs-18">Còn phòng</p>
            </div>
            <div className="detail">
              <p className="fs-16">Địa chỉ</p>
              <p className="fs-16">{this.props.diaChi}</p>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="thongTinPhong">
            <div className="item">
              <div className="khungTitle">
                <div className="icon">
                  <i className="fas fa-audio-description"></i>
                </div>
                <div className="khungTitle">
                  <span className="fs-24">Tiện ích</span>
                </div>
              </div>
              <div className="convenient">
                {this.props.tienIchs
                  .filter((item) => item.ischeck === true)
                  .map((item: tienIch) => {
                    console.log("ho hieu");
                    return (
                      <div className="cvns">
                        <div className="amenityFeature">
                          <div className="iconamenityFeature">
                            <i className={item.icon}></i>
                          </div>
                          <span className="fs-16">{item.title}</span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="thongTinPhong">
            <div className="item">
              <div className="khungTitle">
                <div className="icon">
                  <i className="fas fa-notes-medical"></i>
                </div>
                <div className="khungTitle">
                  <span className="fs-24">Lưu ý</span>
                </div>
              </div>
              <div className="sucChua">
                <div className="sc">
                  <div className="itemsc">
                    <p>Rộng</p>
                  </div>
                  <div className="button btn btn-secondary">
                    <p>1 người</p>
                  </div>
                </div>
                <div className="sc">
                  <div className="itemsc">
                    <p>Vừa</p>
                  </div>
                  <div className="button btn btn-success">
                    <p>1 người</p>
                  </div>
                </div>
                <div className="sc">
                  <div className="itemsc">
                    <p>Chật</p>
                  </div>
                  <div className="button btn btn-danger">
                    <p>1 người +</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="thongTinPhong">
            <div className="item">
              <div className="khungTitle">
                <div className="icon">
                  <i className="fab fa-simplybuilt"></i>
                </div>
                <div className="khungTitle">
                  <span className="fs-24">Mô tả thêm</span>
                </div>
              </div>
              <div className="moTaThem">
                <p itemProp="description " className="noiDungMoTa fs-16">
                  {this.props.noiDungMoTa}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
type State = {};
type Props = {
  gia: string;
  dienTich: number;
  datCoc: number;
  sucChua: number;
  dien: string;
  nuoc: string;
  wifi: number;
  tinhTrang: string;
  diaChi: string;
  noiDungMoTa: string;
  tienIchs: tienIch[];
  gioiTinh: string;
};

type tienIch = {
  icon: string;
  title: string;
  ischeck: boolean;
};
export default informationRoom;
