import React, { Component } from 'react';
import '../App.css';
import { NavBar } from './NavBar/NavBar.js';
import { data } from './NavBar/data.js';

export class SplashPage extends Component {
    render() {
        return (
            <div className="homeWrapper">
                <div className="circle"></div>
                <div className="circle_inner"></div>
                <div className="PageCont">
                    <div className="body" id="home">
                        <h2>BPA CARES</h2>
                        <NavBar items={data}/>
                        <div className="torches">
                            <p>LOVE | HOPE | FAITH | PATRIOTISM</p>
                            <p>LEADERSHIP | SERVICE | COOPERATION | KNOWLEDGE | FRIENDSHIP</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
