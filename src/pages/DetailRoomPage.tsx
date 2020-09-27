import React, { Component } from 'react';
import Menu from '../components/Menu';
import Picture from '../components/Picture';
import Information from '../components/Information';
import Footer from '../components/Footer';
import InformationMater from '../components/InformationMaster';

class DetailRoomPage extends Component {

    render() {
        return (
          <div className = 'deTailRoom'>
            <Menu></Menu>
            <Picture></Picture>
            <Information></Information>
            {/* <InformationMater></InformationMater> */}
            <Footer></Footer>
          </div>
        );
    }
}

export default DetailRoomPage;