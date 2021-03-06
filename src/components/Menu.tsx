import { type } from 'os';
import React, { Component } from 'react';

class Menu extends Component<Props, State> {
  constructor(props: any){
    super(props);
    this.state = {
      search: "",
    };
  }


  render() {
     var data = localStorage.getItem("dsPhong");

     var dsphong = JSON.parse(data || "[]");
     var phongHienThi = dsphong;

     console.log(phongHienThi[1].tieuDeDangBai);
     
    console.log(this.state.search);
    return (
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
              <div id="logo">
                <img
                  src="https://www.ohanaliving.vn/8cc95480cbd2708db10ad4b8de56306a.svg"
                  alt="#"
                />
              </div>

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
                  value = {this.state.search}
                  onChange ={(event)=> {
                    this.setState({
                      search: event.target.value

                    })
                        let  danhSachTimKiem = [];
                      for (var i = 0 ; i < phongHienThi.length; i++ ){
                        if(phongHienThi[i].tieuDeDangBai.includes(this.state.search) === true){
                          danhSachTimKiem.push(phongHienThi[i]);
                          console.log('danh sách tìm kiếm'+danhSachTimKiem);
                          
                        }
                      }
                    

                  }}
                  
                />
              
                <button >
                  <i className="  fas fa-search-location"></i>
                </button>
              </div>


            </div>
          </div>
        </div>
      </div>
    );
  }

}
type Props = {};
type State = {
  search : string;
}
export default Menu;