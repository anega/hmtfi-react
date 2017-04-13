import React, { Component, PropTypes } from 'react'
import Header from '../Header/index'
import SideMenu from '../SideMenu/index'
import Footer from '../Footer/index'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <content>
          <div className='wrap'>
            <SideMenu />
            {this.props.children}
          </div>
        </content>
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App
