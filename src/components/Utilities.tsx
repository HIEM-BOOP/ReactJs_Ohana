import React, { Component } from "react";

class Utilities extends Component {
  render() {
    return (
      <div className="tienich">
        <div className="title_img">
          <span className="fs-20 fw-400 cl-success text-secondary">
            Thông tin hình ảnh và tiện ích
          </span>
          <div className="hinhAnhPhong">
            <input
              type="text"
              id="hinhAnhPhong1"
              placeholder="Hình ảnh thứ nhất"
            />
            <input
              type="text"
              id="hinhAnhPhong2"
              placeholder="Hình ảnh thứ hai"
            />
            <input
              type="text"
              id="hinhAnhPhong3"
              placeholder="Hình ảnh thứ ba"
            />
            <input
              type="text"
              id="hinhAnhPhong4"
              placeholder="Hình ảnh thứ tư"
            />
          </div>
          {/* tiên ích */}
        </div>
      </div>
    );
  }
}

export default Utilities;
