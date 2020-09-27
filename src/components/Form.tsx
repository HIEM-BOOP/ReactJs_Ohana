import { yellow } from "@material-ui/core/colors";
import React, { Component } from "react";

class Form extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      loaiPhong: "",
      soLuongPhong: 0,
      sucChua: 0,
      gioiTinh: "",
      dienTich: 30,
      giaChoThue: 1400,
      datCoc: 500,
      tienDien: 100,
      thanhPho: "Buôn Ma Thuột",
      quan: "Krong pak",
      phuong: "Hoa dong",
      tenDuong: "Trần Văn Đồng",
      soNha: "99 Buôn ta ra",
      hinhAnh: [
        "https://bayleaf.s3.amazonaws.com/property-images%2F1599662865856_IMG_9403.JPG",
        "https://bayleaf.s3.amazonaws.com/property-images%2F1599662865857_IMG_9397.JPG",
        "https://bayleaf.s3.amazonaws.com/property-images%2F1599662865857_IMG_9405.JPG",
        "https://bayleaf.s3.amazonaws.com/property-images%2F1579699300127_IMG_20200122_201942.jpg",
      ],
      tienIch: ["Tủ Lạnh"],
      soDienThoai: "0987988620",
      tieuDeDangBai: "Homestay Nữ Quận Tân Bình. Giảm thêm 500k tháng đầu.",
      noiDungMoTa: "hehe",
      thoiGianMoCua : '6h00',
      thoiGianDongCua : '22h00',
      
    };
  }

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
            onClick={this.onClickReset}
            type="number"
            id="soLuongPhong"
            onChange={(event) => {
              this.setState({
                soLuongPhong: event.target.valueAsNumber,
              });
            }}
            value={this.state.soLuongPhong}
            placeholder="Nhập số lượng bạn đang quản lý"
          />
          <div className="sucChua">
            <span className="fs-20 text-secondary">Sức chứa</span>
          </div>
          <input
            // onClick={this.onClickReset}
            onChange={(event) => {
              this.setState({
                sucChua: event.target.valueAsNumber,
              });
            }}
            value={this.state.sucChua}
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
                value={this.state.dienTich}
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
                  value={this.state.giaChoThue}
                  type="number"
                  id="giaChoThue"
                  placeholder="Nhập giá cho thuê"
                />
              </div>
              <div className="datCoc">
                <span className="fs-16 ">Đặt cọc</span>
                <input
                  value={this.state.datCoc}
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
                    value={this.state.tienDien}
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
              <input
                value={this.state.tenDuong}
                typeof="text"
                id="tenDuong"
                placeholder="Tên đường"
              />
            </div>
            <div className="soNha">
              <span className="fs-16">Số nhà</span>
              <input
                value={this.state.soNha}
                typeof="text"
                id="soNha"
                placeholder="Số nhà"
              />
            </div>
          </div>

          <div className="tienich">
            <div className="title_img">
              <span className="fs-20 fw-400 cl-success text-secondary">
                Thông tin hình ảnh và tiện ích
              </span>
              <div className="hinhAnhPhong">
                <input
                  value={this.state.hinhAnh[0]}
                  type="text"
                  id="hinhAnhPhong1"
                  placeholder="Hình ảnh thứ nhất"
                />
                <input
                  value={this.state.hinhAnh[1]}
                  type="text"
                  id="hinhAnhPhong2"
                  placeholder="Hình ảnh thứ hai"
                />
                <input
                  value={this.state.hinhAnh[2]}
                  type="text"
                  id="hinhAnhPhong3"
                  placeholder="Hình ảnh thứ ba"
                />
                <input
                  value={this.state.hinhAnh[3]}
                  type="text"
                  id="hinhAnhPhong4"
                  placeholder="Hình ảnh thứ tư"
                />
              </div>
              {/* tiên ích */}
            </div>
          </div>

          <div id="ctn_tienich">
            <div className="item_tienIch">
              <i className="fas fa-toilet" />
              <span className="fs-16">WC Riêng</span>
            </div>
            <div className="item_tienIch">
              <i className="fas fa-motorcycle" />
              <span className="fs-16">WC Riêng</span>
            </div>
            <div className="item_tienIch">
              <i className="fas fa-door-open" />
              <span className="fs-16">Cửa sổ</span>
            </div>
            <div className="item_tienIch">
              <i className="fas fa-user-shield" />
              <span className="fs16">An ninh</span>
            </div>
            <div className="item_tienIch">
              <i className="fas fa-wifi" />
              <span className="fs-16">Wifi</span>
            </div>
            <div className="item_tienIch">
              <i className="fas fa-stopwatch" />
              <span className="fs-16">Tự do</span>
            </div>
            <div className="item_tienIch">
              <i className="fas fa-key" />
              <span className="fs-16">Chủ riêng</span>
            </div>
            <div className="item_tienIch">
              <i className="fas fa-fan" />
              <span className="fs-16">Máy lạnh</span>
            </div>
            <div className="item_tienIch">
              <i className="fas fa-hand-holding-water" />
              <span className="fs-16">Máy nước nóng</span>
            </div>
            <div className="item_tienIch">
              <i className="fas fa-sink" />
              <span className="fs-16">Nhà bếp</span>
            </div>
            <div className="item_tienIch">
              <i className="fas fa-solar-panel" />
              <span>Tủ lạnh</span>
            </div>
            <div className="item_tienIch">
              <i className="fas fa-recycle" />
              <span>Máy giặt</span>
            </div>
            <div className="item_tienIch">
              <i className="fas fa-life-ring" />
              <span className="fs-16">Gác lửng</span>
            </div>
            <div className="item_tienIch">
              <i className="fas fa-bed" />
              <span className="fs-16">Giường</span>
            </div>
            <div className="item_tienIch">
              <i className="fas fa-door-closed" />
              <span className="fs-16">Tử đồ</span>
            </div>
            <div className="item_tienIch">
              <i className="fas fa-tv" />
              <span className="fs-16">Tivi</span>
            </div>
            <div className="item_tienIch">
              <i className="fas fa-paw" />
              <span className="fs-16">Thú cưng</span>
            </div>
            <div className="item_tienIch">
              <i className="fad fa-bacon" />
              <span className="fs-16">Ban công</span>
            </div>
          </div>

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
                  onChange = {(event) => {
                    this.setState({
                      soDienThoai : '',
                    })
                  }}
                  type="number"
                  placeholder="Nhập số điện thoại"
                  id="soDienThoai"
                />
              </div>
              <div className="ttXacNhan">
                <div className="tt">
                  <span className="fs-16">Tiêu đề đăng bài</span>
                </div>
                <input 
                onChange = {(event) => {
                  this.setState({
                    tieuDeDangBai : ''
                  })
                }}
                type="text" placeholder="Nhập tên phòng" id="tieuDe" />
              </div>
              <div className="ttXacNhan">
                <div className="tt">
                  <span className="fs-16">Nội dung mô tả</span>
                </div>
                <input
                onChange = {(event) => {
                  this.setState({
                    noiDungMoTa : ''
                  })
                }}
                  type="text"
                  placeholder="Môi trường sống sạch , khu phố an ninh..."
                  id="noiDungMoTa"
                  value = {this.state.noiDungMoTa}
                />
              </div>
              <div className="ttXacNhan">
                <div className="tt">
                  <span className="fs-16">Thời gian mở cửa</span>
                </div>
                <input value = {this.state.thoiGianMoCua} type="text" placeholder="Giờ mở cửa" id="openWindow" />
              </div>
              <div className="ttXacNhan">
                <div className="tt">
                  <span className="fs-16">Thời gian gian đóng cửa</span>
                </div>
                <input value = {this.state.thoiGianDongCua} type="text" placeholder="Giờ đóng cửa" id="closeOpen" />
              </div>
            </div>
          </div>
          <div id="dangPhong">
            <div
              onClick={this.onClickDangPhong}
              className="btn btn-large btn-primary rounded"
            >
              <i className="fas fa-home" />
              <span className="fs-16 fw-400">
                Đăng Phòng
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }

  onClickReset = () => {
    this.setState({
      soLuongPhong: JSON.parse(JSON.stringify([undefined])),
      sucChua: JSON.parse(JSON.stringify([undefined])),
    });
  } 

  onClickDangPhong = () => {
    this.setState({
      soLuongPhong: 0,
      sucChua: 0,
      dienTich : 0 ,
      giaChoThue : 0 ,
      datCoc : 0 ,
      tienDien : 0,
      tenDuong : '',
      soNha : '',
      hinhAnh : ['','','',''],
      noiDungMoTa : '',
      thoiGianMoCua : '',
      thoiGianDongCua : '',

    });

    console.log("Hiêm");
  };
}

type Props ={};
type State = {
    loaiPhong : string,
    soLuongPhong: number,
    sucChua: number,
    gioiTinh : string,
    dienTich : number,
    giaChoThue : number,
    datCoc : number,
    tienDien : number ,
    thanhPho : string,
    quan : string ,
    phuong : string ,
    tenDuong : string ,
    soNha : string ,
    hinhAnh : string[],
    tienIch : string[],
    soDienThoai : string,
    tieuDeDangBai : string,
    noiDungMoTa : string ,
    thoiGianMoCua : string,
    thoiGianDongCua : string,



}
export default Form;
