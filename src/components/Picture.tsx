import React, { Component } from 'react';

class picture extends Component {

    render() {
        return (
          <div className="picture">
            <div id="images">
              <div
                style={{
                  background:
                    'url("https://bayleaf.s3.ap-southeast-1.amazonaws.com/property-images/1599796984882.jpg") no-repeat center center/cover',
                }}
                id="image"
              ></div>
              <div
                style={{
                  background:
                    'url("https://bayleaf.s3.ap-southeast-1.amazonaws.com/property-images/1599796984882.jpg") no-repeat center center/cover',
                }}
                id="image"
              ></div>

              <div
                style={{
                  background:
                    'url("https://bayleaf.s3.ap-southeast-1.amazonaws.com/property-images/1599796984882.jpg") no-repeat center center/cover',
                }}
                id="image"
              ></div>

              <div
                style={{
                  background:
                    'url("https://bayleaf.s3.ap-southeast-1.amazonaws.com/property-images/1599796984882.jpg") no-repeat center center/cover',
                }}
                id="image"
              ></div>

              <div
                style={{
                  background:
                    'url("https://bayleaf.s3.ap-southeast-1.amazonaws.com/property-images/1599796984882.jpg") no-repeat center center/cover',
                }}
                id="image"
              ></div>
            </div>
            <div className="khungThongTinTenAnh">
              <div className="tenAnh">
                <div id="title1" style={{ width: "800px" }}>
                  <h1 itemProp="name" className="Vg-MA fs-32 mb-6">
                    Căn hộ full nội thất, Ban công, được nuôi thú cưng, Rất sang
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

export default picture;