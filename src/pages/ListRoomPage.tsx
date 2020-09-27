import React, { Component } from 'react';
import Filter from '../components/Filter';
import Footer from '../components/Footer';
import ListRoom from '../components/ListRoom';
import Menu from '../components/Menu';

class ListRoomPage extends Component {

    render() {
        return (
          <div className="container">
            <Menu></Menu>
            <ListRoom></ListRoom>
            <Filter></Filter>
            <Footer></Footer>

          </div>
        );
    }
}

export default ListRoomPage;