import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="left_frame">
          <ul className="fs-24 fw-400">
            <li className="fs-24 ">
              Bộ Lọc
              <button
                type="button"
                className=" rounded btn-outline-secondary rd-15 text-secondary btn-link fs-16 "
              >
                <span>Áp Dụng</span>
              </button>
            </li>
            <li className="fs-20">Giá</li>
            <li className="fs-20">Tiện ích</li>
            <li className="fs-20">Loại phòng</li>
            <li className="fs-20">Giới tính </li>
            <li className="fs-20 text-secondary">Áp dụng</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Filter;
