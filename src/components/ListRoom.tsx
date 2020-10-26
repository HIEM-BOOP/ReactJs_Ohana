import React, { Component } from "react";
import RoomItem from "./RoomItem";

class ListRoom extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    var data = localStorage.getItem("dsPhong");
    var dsphong = JSON.parse(data || "{}");
    this.state = { rooms: dsphong, search: "" };
  }
  render() {
    return (
      <div className="listRoom">
        <div className="ketQua">
          <span className="fs-26">Kết quả</span>
        </div>
        <div className="menu">
          <div className="canGiua">
            <div className="hf_center">
              <div className="hr_left ">
                <div className="item">
                  <i className="fas fa-home text-white"></i>
                  <span>Đăng phòng dễ dàng</span>
                </div>

                <div className="item">
                  <i className="fas fa-download"></i>
                  <span>Tải APP</span>
                </div>
              </div>
            </div>
          </div>
          {/* Tìm kiếm và logo */}
          <div className="hf_below">
            <div className="hf_center">
              <div className="hf_LgSh">
                <div id="search">
                  <i className="fas fa-map-marker-alt"></i>
                  <select name="tinhThanh" id="tinhThanh">
                    <option value="TP.HCM">TP.HCM</option>
                    <option value="TP Hà Nội">TP Hà Nội</option>
                  </select>

                  <input
                    type="text"
                    className="timKiem fs-16 fm-400"
                    id="timKiem"
                    placeholder="Tìm Kiếm theo địa điểm, quận,tên đường..."
                    value={this.state.search}
                    onChange={(event) => {
                      this.setState({
                        search: event.target.value,
                      });

                      console.log(event.target.value);
                      // Tạo mảng rỗng
                      let danhSachTimKiem = [];
                      let tatCaRooms = localStorage.getItem("dsPhong");
                       var dsphong = JSON.parse(tatCaRooms || "{}");
                      // Chạy vòng lặp , rooms là dsphong mà dsphong là lấy từ local và đc gắn cho rooms : dsphong
                      for (var i = 0; i < dsphong.length; i++) {
                        // Tạo điều kiện nếu trong tất cả các danh sách phòng có cùng tiêu đề với người dùng thao tác nhập thì push vào mảng danhSachTimKiem , mà includes chỉ trả giá trị true or fasle nên ta phải set đk là == true

                        if (
                          dsphong[i].tieuDeDangBai.includes(
                            this.state.search
                          ) === true
                        ) {
                          danhSachTimKiem.push(dsphong[i]);
                          console.log(danhSachTimKiem);
                        } 
                        
                      }
                      // cập nhật lại state phần roons .rooms là tất cả các danh sách phòng lúc đầu rooms : dsphong và hiện tại setState lại thành rooms : danhSachTimKiem , mà dach sách tìm kiếm này chứa thông tin tiêu đề mà người dùng tìm
                      this.setState({
                        rooms: danhSachTimKiem,
                      });
                    }}
                  />

                  <button>
                    <i className="  fas fa-search-location"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.rooms.map((item: any) => {
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
      </div>
    );
  }
}

type State = {
  rooms: any[];
  search: string;
};

export default ListRoom;
