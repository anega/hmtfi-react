import React, { Component } from 'react'
import MapInit from './MapInit'

class MapComponent extends Component {
  render () {
    return (
      <div style={{height: `100%`}}>
        <MapInit
          containerElement={
            <div style={{height: `100%`}} />
          }
          mapElement={
            <div style={{height: `100%`}} />
          }
          marker={this.props.marker}
          center={this.props.center} />
      </div>
    )
  }
}

export default MapComponent
