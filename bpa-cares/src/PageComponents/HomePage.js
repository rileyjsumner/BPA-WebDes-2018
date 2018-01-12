import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets';
import Iframe from 'react-iframe';
import '../App.css';
import dreambigger from '../pics/dreambigger.jpg';

export class HomePage extends Component {
    render() {
        return (
            <div className="homePageWrapper">
                <div className="homeContent">
                    <div id="homeRow">
                        <div className="row home-row">
                            <div className="col-md-4 text-center home-div">
                                <Timeline
                                    dataSource={{
                                      sourceType: 'profile',
                                      screenName: 'national_bpa'
                                    }}
                                    options={{
                                      height: '700',
                                      width: '400'
                                    }}
                                    onLoad={() => console.log('Timeline is loaded!')}
                                />
                            </div>
                            <div className="col-md-8 text-center home-div">
                                <h1>BPA Cares Guidelines</h1>
                                <p>A BPA chapter aligned with the goals and mission of Business Professional of America is concerned with service. Business Professionals of America recommends chapters become involved in one or more of the BPA Cares programs it offers. Participation in this program means that members are engaging in worthwhile projects while having the opportunity to receive recognition from the national organization.<b> Be sure to share pictures of you and/or your chapter participating in various BPA Cares activities on social media, tag BPA, and use the hashtag, “#bpacares”.</b></p>
                                <Iframe url="https://www.youtube.com/embed/ZuzE6nXl6Fg" width="90%" height="65%" allowFullScreen/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="break">
                </div>
                <div className="homeContent">
                    <div className="row home-row">
                        <div className="col-md-12 text-center footer">
                            <h1>Designed by Anoka BPA Web Design Team 1</h1>
                            <p>30-0005-0008 | 30-0005-0018</p>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
