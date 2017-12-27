import React, { Component } from 'react';
import '../App.css';
import { Navigation } from './NavBar/NavBar.js';

export class SplashPage extends Component {
    render() {
        return (
            <div className="homeWrapper">
                <div className="circle"></div>
                <div className="circle_inner"></div>
                <div className="PageCont">
                    <div className="body" id="home">
                        <h2>BPA CARES</h2>
                        <div className="torches">
                            <p>LEADERSHIP | SERVICE | COOPERATION </p>
                            <p>KNOWLEDGE | FRIENDSHIP | LOVE</p>
                            <p>HOPE | FAITH | PATRIOTISM</p>
                        </div>
                        <Navigation/>
                    </div>
                </div>
            </div>
        );
    }
}
