import React, { Component } from 'react';
import { ApplicationGuidelines } from '../../PageComponents/GeneralComponents/ApplicationGuidelines.js';
import{ Generalinfo } from '../../PageComponents/GeneralComponents/Generalinfo.js';
import { NonDiscrimination} from '../../PageComponents/GeneralComponents/Non-Discrimination.js';
import {Recognition} from '../../PageComponents/GeneralComponents/Recognition.js';
import { SplashPage } from '../../PageComponents/SplashPage.js';

export class OutstandingService extends Component {
    render() {
        return (
            <div className="Wrapper">
                <SplashPage />
                <div className="awardWrapper">
                    <h1>Outstanding Service Award</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Purpose</h2>
                            <p>To recognize those individuals who have dedicated time and effort to promote the objectives of career/technical student organizations/Business Professionals of America or provided outstanding service to BPA at the national level.</p>
                            <h2> Eligibility</h2>
                            <p>Any individual supportive of career/technical student organizations/Business Professionals of America. To be eligible for the Outstanding Service Award, the nominee must not have received this award within the last five years. The nominator must submit the following information about the nominee:</p>
                            <ol>
                                <li> Nomination Form </li>
                                <li> List of national activities and involvement </li>
                                <li> List of state and local activities and involvement </li>
                                <li> List of participation in other professional organizations and community service </li>
                                <li> List of any other pertinent information about the nominee that you believe will assist the Committee in making the selections </li>
                                <li> National staff and current student members are ineligible for this award </li>
                            </ol>
                        </div>
                        <div className="col-md-6">
                            <h2>Entries</h2>
                            <p>Nominations will be accepted every year from the following: National Officers, Board of Trustees, SAAC State Advisors/Supervisors, National Staff, National Business Advisory Council, Classroom Educators Advisory Council, Local Advisors and Members.</p>
                            <ApplicationGuidelines/>
                            <Generalinfo/>
                            <h2>Recognition</h2>
                            <p>A maximum of five (5) individuals will be recognized on stage with a plaque at the National Leadership Conference.</p>
                        </div>
                    </div>
                    <NonDiscrimination/>
                </div>
            </div>
        );
    }
  }
