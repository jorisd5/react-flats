import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import flats from '../../data/flat';
import FlatList from './flat_list';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flatsList: flats
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  center() {
    const { selectedFlat } = this.state;
    const { lat, lng } = selectedFlat;
    return {
      lat,
      lng
    };
  }


  render() {
    const { flatsList, selectedFlat } = this.state;
    return (
      <div>
        <FlatList
          flats={flatsList}
          selectFlat={this.selectFlat}
          selectedFlat={selectedFlat}
        />
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
            <Marker lat={selectedFlat.lat} lng={selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
