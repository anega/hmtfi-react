import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const MapInit = withGoogleMap(props => (
  <GoogleMap defaultZoom={3} defaultCenter={{lat: -25.363882, lng: 131.044922}}>
    <Marker {...props.marker} />
  </GoogleMap>
))

export default MapInit
