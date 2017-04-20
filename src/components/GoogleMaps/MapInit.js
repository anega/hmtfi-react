import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const MapInit = withGoogleMap(props => (
  <GoogleMap defaultZoom={3} defaultCenter={props.center}>
    <Marker {...props.marker} />
  </GoogleMap>
))

export default MapInit
