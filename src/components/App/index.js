import React, { Component } from 'react';
import Header from '../Header/index';
import SideMenu from '../SideMenu/index';
import ContentList from '../MainContentList/index';
import Footer from '../Footer/index';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <content>
                    <div className="wrap">
                        <SideMenu/>
                        <ContentList/>
                    </div>
                </content>
                <Footer/>
            </div>
        );
    }
}

export default App;