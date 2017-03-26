import React, { Component, PropTypes } from 'react';
import Header from '../Header/index';
import SideMenu from '../SideMenu/index';
import ContentList from '../AnnouncementsList/index';
import Footer from '../Footer/index';

class App extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired
    };

    render() {
        return (
            <div>
                <Header/>
                <content>
                    <div className="wrap">
                        <SideMenu/>
                        {/*<ContentList/>*/}
                        {this.props.children}
                    </div>
                </content>
                <Footer/>
            </div>
        );
    }
}

export default App;