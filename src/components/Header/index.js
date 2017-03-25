import React, { Component } from 'react';

class Header extends Component {
    render () {
        return (
            <header>
                <div className="wrap">
                    <div className="logo"><img src="./src/assets/images/logo.png" alt="Help me to find it logo"/></div>
                    <ul className="user-menu">
                        <li>Login |</li>
                        <li>Registration</li>
                    </ul>
                    <h1>Duis autem vel eum iriure dolor in hendrerit in vulputate velit Veniam</h1>
                    <div className="add-announcement">+ Add announcement</div>
                </div>
            </header>
        );
    }
}

export default Header;