import React, { Component } from 'react';
import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import '../App.css';
import upIcon from '../pics/upIcon.png';
import { Navigation } from './NavBar/NavBar.js';

export class SplashPage extends Component {
    componentDidMount() {
        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });
        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });
        scrollSpy.update();
    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    scrollToTop() {
        scroll.scrollToTop();
    }
    handleSetActive(to) {
        console.log(to);
    }
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
                        <div id="nav">
                            <Navigation/>
                        </div>
                    </div>
                </div>
                <a className="scroller" onClick={this.scrollToTop}><img src={upIcon} height="75" width="75" alt=""/></a>
            </div>
        );
    }
}
