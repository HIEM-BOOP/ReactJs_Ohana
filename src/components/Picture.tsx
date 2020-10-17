import { type } from 'os';
import React, { Component } from 'react';

class picture extends Component <Props,State> {

    render() {
      console.log(this.props.hinhAnhs);
      return (
          <div className="picture">
            <div id="images">
              {this.props.hinhAnhs.map((item) => {
                return (
                  <div
                    style={{
                      background:
                        `url(${item.link}) no-repeat center center/cover`,
                    }}
                    id="image"
                  ></div>
                );
              })}
             
            </div>
            <div className="khungThongTinTenAnh">
              <div className="tenAnh">
                <div id="title1" style={{ width: "800px" }}>
                  <h1 itemProp="name" className="Vg-MA fs-32 mb-6">
                    {this.props.tieuDeDangBai}
                  </h1>
                </div>
                <div className="title2">
                  <button className="btn btn-outline-primary fs-20 cl-light rounded">
                    <i className="fas fa-share-alt" />
                    chia sẻ
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
    }


}
type State = {
}
type hinhAnh = {
  name: string;
  link: string;
  placeholder: string;
};

type Props = {
  hinhAnhs: hinhAnh[];
  tieuDeDangBai : string;
};

export default picture;