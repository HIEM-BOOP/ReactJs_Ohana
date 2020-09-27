import React, { Component } from "react";
import Utilities from "./Utilities";
import UtilityRoom from "./UtilityRoom";


class Form extends Component {
  render() {
    return (
      <div className="upRoom">
        <form className="dangPhong">
          <div className="title">
            <span className="fs-30 fw-400 text-primary ">Thông Tin Phòng</span>
          </div>
          <div className="loaiPhong">
            <div className="noiDung">
              <span className="fs-20 text-secondary">Loại Phòng</span>
            </div>
            <div className="radio">
              <div className="item_radio">
                <input
                  type="radio"
                  className="loaiPhong"
                  defaultValue="Kí túc xá/Homestay"
                  name="loaiPhong"
                />
                <label htmlFor="content" className="contents">
                  Kí túc xá/Homestay
                </label>
              </div>
              <div className="item_radio">
                <input
                  type="radio"
                  className="loaiPhong"
                  defaultValue="Kí túc xá/Homestay"
                  name="loaiPhong"
                />
                <label htmlFor="content" className="contents">
                  phòng cho thuê
                </label>
              </div>
              <div className="item_radio">
                <input
                  type="radio"
                  className="loaiPhong"
                  defaultValue="Kí túc xá/Homestay"
                  name="loaiPhong"
                />
                <label htmlFor="content" className="contents">
                  Phong ở ghép
                </label>
              </div>
              <div className="item_radio">
                <input
                  type="radio"
                  className="loaiPhong"
                  defaultValue="Kí túc xá/Homestay"
                  name="loaiPhong"
                />
                <label htmlFor="content" className="contents">
                  Nhà nguyên căn
                </label>
              </div>
              <div className="item_radio">
                <input
                  type="radio"
                  className="loaiPhong"
                  defaultValue="Kí túc xá/Homestay"
                  name="loaiPhong"
                />
                <label htmlFor="content" className="contents">
                  Căn hộ
                </label>
              </div>
            </div>
          </div>
          <div className="noiDung">
            <span className="fs-20 text-secondary">Số lượng phòng</span>
          </div>
          <input
            type="number"
            id="soLuongPhong"
            placeholder="Nhập số lượng bạn đang quản lý"
          />
          <div className="sucChua">
            <span className="fs-20 text-secondary">Sức chứa</span>
          </div>
          <input
            type="number"
            id="sucChua"
            placeholder="Nhập số lượng sức chứa"
          />
          <div className="genDer">
            <span className="fs-20 text-secondary">Giới Tính</span>
            <div className="gender">
              <input type="radio" name="gioiTinh" id="gioiTinh" />
              <label htmlFor="content">Tất cả</label>
            </div>
            <div className="gender">
              <input type="radio" name="gioiTinh" id="gioiTinh" />
              <label htmlFor="content">Nam</label>
            </div>
            <div className="gender">
              <input type="radio" name="gioiTinh" id="gioiTinh" />
              <label htmlFor="content">Nữ</label>
            </div>
          </div>
          <div className="dienTich">
            <div className="tt">
              <span className="fs-20 text-secondary">Diện Tích</span>
            </div>
            <div className="tt">
              <input
                type="text"
                name="dienTich"
                id="dienTich"
                placeholder="Nhập diện tích phòng"
              />
            </div>
          </div>
          <div className="chiPhi">
            <span className="fs-20 text-secondary">Chi Phí</span>
            <div className="khungChiPhi">
              <div className="giaChoThue">
                <span className="fs-16 ">Gía cho thuê</span>
                <input
                  type="number"
                  id="giaChoThue"
                  placeholder="Nhập giá cho thuê"
                />
              </div>
              <div className="datCoc">
                <span className="fs-16 ">Đặt cọc</span>
                <input
                  type="number"
                  id="datCoc"
                  placeholder="Nhập số tháng hoặc số tiền"
                />
              </div>
              <div className="tienDien">
                <div className="ttTienDien">
                  <span className="fs-16 ">Tiền điện</span>
                </div>
                <div className="ipTienDien">
                  <input
                    type="number"
                    id="tienDien"
                    placeholder="Nhập số tiền"
                  />
                  <div className="khungMienPhi">
                    <input
                      type="checkbox"
                      name="mienphi"
                      id="mienPhi"
                      defaultValue="Miễn Phí"
                    />
                    <span className="fs-16">Miễn Phí</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="diaChiChiTiet">
            <div className="thanhPho">
              <span className="fs-16">Thành Phố</span>
              <select name="thanhPho" id="thanhPho">
                <option value="Hồ chí minh">Hồ Chí Minh</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Đà Nẵng">Đà Nẵng</option>
                <option value="Singapore">Singapore</option>
                <option value="San Francisco">San Francisco</option>
              </select>
            </div>
            <div className="quan">
              <span className="fs-16">Quận/Huyện</span>
              <select typeof="quan" id="quan">
                <option value="Quận 1">Quận 1</option>
                <option value="Quận 2">Quận 2</option>
                <option value="Quận 3">Quận 3</option>
                <option value="Quận 4">Quận 4</option>
                <option value="Quận 5">Quận 5</option>
              </select>
            </div>
            <div className="phuong">
              <span className="fs-16 ">Phường/Xã</span>
              <select typeof="car" id="phuong">
                <option value="Phường 1">Phường 1</option>
                <option value="Phường 2">Phường 2</option>
                <option value="Phường 3">Phương 3</option>
                <option value="Phường 4">Phương 4</option>
                <option value="Phường 5">Phương 5</option>
              </select>
            </div>

            <div className="tenDuong">
              <span className="fs-16">Tên đường</span>
              <input typeof="text" id="tenDuong" placeholder="Tên đường" />
            </div>
            <div className="soNha">
              <span className="fs-16">Số nhà</span>
              <input typeof="text" id="soNha" placeholder="Số nhà" />
            </div>
          </div>
          <Utilities></Utilities>
          <UtilityRoom></UtilityRoom>
          <div className="khungXacNhan">
            <div className="tt-xacNhan">
              <span className="fs-20 fw-400 cl-success text-secondary">
                Xác nhận
              </span>
            </div>
            <div className="container_xacNhan">
              <div className="ttXacNhan">
                <div className="tt">
                  <span className="fs-16">Số điện thoại</span>
                </div>
                <input
                  type="number"
                  placeholder="Nhập số điện thoại"
                  id="soDienThoai"
                />
              </div>
              <div className="ttXacNhan">
                <div className="tt">
                  <span className="fs-16">Tiêu đề đăng bài</span>
                </div>
                <input type="text" placeholder="Nhập tên phòng" id="tieuDe" />
              </div>
              <div className="ttXacNhan">
                <div className="tt">
                  <span className="fs-16">Nội dung mô tả</span>
                </div>
                <input
                  type="text"
                  placeholder="Môi trường sống sạch , khu phố an ninh..."
                  id="noiDungMoTa"
                />
              </div>
              <div className="ttXacNhan">
                <div className="tt">
                  <span className="fs-16">Thời gian mở cửa</span>
                </div>
                <input type="text" placeholder="Giờ mở cửa" id="openWindow" />
              </div>
              <div className="ttXacNhan">
                <div className="tt">
                  <span className="fs-16">Thời gian gian đóng cửa</span>
                </div>
                <input type="text" placeholder="Giờ đóng cửa" id="closeOpen" />
              </div>
            </div>
          </div>
          <div id="dangPhong">
            <div className="btn btn-large btn-primary rounded">
              <i className="fas fa-home" />
              <span className="fs-16 fw-400">Đăng Phòng</span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
