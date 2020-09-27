import React, { Component } from 'react';

class informationMater extends Component {

    render() {
        return (
          
            <div className="chuPhong">
              <div className="khungTitle">
                <div className="icon">
                  <i className="far fa-user " />
                </div>
                <div className="khungTitle">
                  <span className="fs-24">Thông tin chủ phòng</span>
                </div>
              </div>
              <div className="ttChuTro">
                <div className="avatar">
                  <img
                    src="https://www.ohanaliving.vn/1cf90843456553539051b8ea8613c5d5.png"
                    alt="avatar"
                  />
                </div>
                <div className="tenSdt">
                  <span>裴海英</span>
                  <div className="sdt">
                    <span>SĐT: </span>
                    <span>0906277296</span>
                  </div>
                </div>
                <div className="ngayDang">
                  <div className="sdt">
                    <span>Ngày đăng:&nbsp;</span>
                    <span>31-08-2020</span>
                  </div>
                </div>
              </div>
            </div>
          
        );
    }
}

export default informationMater;