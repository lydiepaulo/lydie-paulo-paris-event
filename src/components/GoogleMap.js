import React, { Component } from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

export class MapContainer extends Component {

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    render() {
        return (
            <Map
                zoom={11}
                style={{ height: '150px', width: '25vw' }}
                initialCenter={{ lat: this.props.coord.lat, lng: this.props.coord.lon }}
                google={this.props.google}
                onClick={this.onMapClicked}>
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GMAPS_API_KEY)
})(MapContainer)