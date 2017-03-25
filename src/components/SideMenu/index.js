import React, { Component } from 'react';

class SideMenu extends Component {
    render () {
        return (
            <div className="l-sidebar">
                <ul className="l-sidebar-menu">
                    <li><span className="icon icon-people"></span>People</li>
                    <li><span className="icon icon-animals"></span>Animals</li>
                    <li><span className="icon icon-things"></span>Things</li>
                    <li><span className="icon icon-crime"></span>Crime</li>
                    <li><span className="icon icon-settings"></span>Settings</li>
                </ul>
            </div>
        );
    }
}

export default SideMenu;