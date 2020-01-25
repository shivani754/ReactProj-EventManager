import React,{Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

 export class MapContainer extends Component {   //ambala kanpur chandigarh  ropar
    constructor(props) {
      super(props);
  
      this.state = {
        stores: [
                {city:"ambala", latitude: 30.378180, longitude: 76.776695},
                {city:"kanpur",latitude: 26.449923, longitude: 80.331871},
                {city:"chandigarh",latitude: 30.741482, longitude: 76.768066 }
              ]
      }
    }
   
    displayMarkers = () => {
      return this.state.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.latitude,
         lng: store.longitude
       }}
       onClick={() => console.log("You clicked me!")} />
      })
    }
  
    render() {
      return (
          <Map
            google={this.props.google}
            zoom={8}
            initialCenter={{ lat: 30.899148, lng: 75.817531}}
          >
            {this.displayMarkers()}
          </Map>
      );
    }
  }


  export default GoogleApiWrapper({
         apiKey: ('AIzaSyCENTvPUZ-BPMQBMu-WIimrf_-L70WbUQs')
       })(MapContainer)