import React, { Component } from 'react';
import InformationRoom from '../components/informationRoom';
import InformationMaster from '../components/InformationMaster';
class Information extends Component {

    render() {
        return (
          <div className="Information">
            <InformationRoom></InformationRoom>
            <InformationMaster></InformationMaster>
          </div>
        );
    }
}

export default Information;