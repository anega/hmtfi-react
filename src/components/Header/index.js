import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    render () {
        return (
            <header>
                <div className="wrap">
                    <div className="logo">
                        <Link to="/"><img src="./src/assets/images/logo.png" alt="Help me to find it logo"/></Link>
                    </div>
                    <ul className="user-menu">
                        <li><Link to="test">Login</Link> |</li>
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