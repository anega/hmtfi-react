import React, { Component } from 'react';

class MainList extends Component {
    render() {
        return (
            <div className="content">
                <ul className="announcement-list">
                    <li>
                        <div className="announcement-img-wrap">
                            <img src="./src/assets/images/test1.jpg" alt=""/>
                        </div>
                        <div className="announcement-prev-description">
                            <h2>Lorem ipsum dolor sit ...</h2>
                            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit Veniam, quis nostrud exerci tation ullamcorper suscipit </p>
                            <span>200m</span>
                        </div>
                    </li>
                    <li>
                        <div className="announcement-img-wrap">
                            <img src="./src/assets/images/test2.jpg" alt=""/>
                        </div>
                        <div className="announcement-prev-description">
                            <h2>'What if somebody</h2>
                            <p>One day, Jonathan is met by two gulls who take him to a "higher plane of existence" in that there is no heaven but a better world found through perfection of knowledge, where he meets other gulls who love to fly. He discovers that his sheer tenacity and desire to learn make him "pretty well a one-in-a-million bird."</p>
                            <span>145m</span>
                        </div>
                    </li>
                    <li>
                        <div className="announcement-img-wrap">
                            <img src="./src/assets/images/test3.jpg" alt=""/>
                        </div>
                        <div className="announcement-prev-description">
                            <h2>This is quite different</h2>
                            <p>Donald Shimoda is a messiah who quits his job after deciding that people value the showbiz-like performance of miracles and want to be entertained by those miracles more than to understand the message behind them. He meets Richard, a fellow barn-storming pilot and begins to pass on his knowledge to him, even teaching Richard to perform "miracles" of his own.</p>
                            <span>648645984m</span>
                        </div>
                    </li>
                    <li>
                        <div className="announcement-img-wrap">
                            <img src="./src/assets/images/test1.jpg" alt=""/>
                        </div>
                        <div className="announcement-prev-description">
                            <h2>Lorem ipsum dolor sit ...</h2>
                            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit Veniam, quis nostrud exerci tation ullamcorper suscipit </p>
                            <span>200m</span>
                        </div>
                    </li>
                    <li>
                        <div className="announcement-img-wrap">
                            <img src="./src/assets/images/test2.jpg" alt=""/>
                        </div>
                        <div className="announcement-prev-description">
                            <h2>'What if somebody</h2>
                            <p>One day, Jonathan is met by two gulls who take him to a "higher plane of existence" in that there is no heaven but a better world found through perfection of knowledge, where he meets other gulls who love to fly. He discovers that his sheer tenacity and desire to learn make him "pretty well a one-in-a-million bird."</p>
                            <span>145m</span>
                        </div>
                    </li>
                    <li>
                        <div className="announcement-img-wrap">
                            <img src="./src/assets/images/test3.jpg" alt=""/>
                        </div>
                        <div className="announcement-prev-description">
                            <h2>This is quite different</h2>
                            <p>Donald Shimoda is a messiah who quits his job after deciding that people value the showbiz-like performance of miracles and want to be entertained by those miracles more than to understand the message behind them. He meets Richard, a fellow barn-storming pilot and begins to pass on his knowledge to him, even teaching Richard to perform "miracles" of his own.</p>
                            <span>648645984m</span>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default MainList;