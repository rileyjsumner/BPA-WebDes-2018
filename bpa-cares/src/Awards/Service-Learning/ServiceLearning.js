import React, { Component } from 'react';
import { NonDiscrimination} from '../../PageComponents/GeneralComponents/Non-Discrimination.js';
import { SplashPage } from '../../PageComponents/SplashPage.js';import '../../animation.css';

export class ServiceLearning extends Component {
    render() {
        return (
            <div className="Wrapper">
                <SplashPage />
                <h1>Service Learning Awards Program Overview</h1>
                <div className="awardWrapper slideUp">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Awards</h2>
                            <ol>
                                <li>Community Service Award</li>
                                <li>Special Olympics</li>
                                <li>Environmental Action/Awareness</li>
                                <li>Safety Awareness Award</li>
                                <li>Service Learning Individual</li>
                            </ol>
                            <h2>Purpose</h2>
                            <p>The purpose of the Service Learning Awards Program is to encourage individuals and chapters to be involved in their community through service learning.</p>
                            <h2>Eligibility</h2>
                            <p>All applicants must be in good standing with Business Professionals of America. The awards are open to members in the Middle Level, Post-Secondary and Secondary Divisions.</p>
                            <h2>Submission</h2>
                            <p>Service Learning Award applications must be submitted utilizing the online application. Submission applications must include all activity descriptions. Partial applications will not be accepted or combined. Do not begin the application online submission form until you have completed all activities. Applications due April 1.</p>
                            <h2>Qualification Period</h2>
                            <p>Activities completed between April 2, 2017 and April 1, 2018 (11:59 PM EST) can be counted towards this award.</p>
                        </div>
                        <div className="col-md-6">
                            <h2>General Information</h2>
                            <p>Applicants may only count activities once in the BPA Cares Award Program, except Service Learning Individual and Chapter Activities Award of Excellence. Chapters may complete more than one activity to equal the total number of hours/dollars.</p>
                            <p>Activity descriptions cannot exceed 500 words in total.</p>
                            <p>Activities could include fundraising activities, volunteer activities, training, public relations, or any other unique involvement with Special Olympics, green projects, safety initiatives and other community service programs.</p>
                            <p>All activity descriptions must include title, organization benefiting from the project, date project completed, location of the project and description of the project.</p>
                            <p>NO E-MAIL OR MAIL APPLICATONS WILL BE ACCEPTED</p>
                            <p>All materials submitted become the property of Business Professionals of America and may be used as the National Center deems appropriate.</p>
                            <p>It is not necessary for a chapter or individual to attend the National Leadership Conference to participate in the program and receive the award, except Merit Scholar.</p>
                            <p>DO NOT SEND ANY AWARD APPLICATION(S) AS PART OF ANOTHER APPLICATION. AWARDS MAY NOT BE SUBMITTED WITH TECHNICAL PROJECTS FOR COMPETITIVE EVENTS. EACH AWARD MUST BE SUBMITTED SEPARATELY.</p>
                            <h2>Recognition</h2>
                            <p>100-249 service hours OR $500.00-$999.00 contribution: Certificate of Achievement 250+ service hours or $1000.00+: Award of Achievement and recognition on-stage at the National Leadership Conference.</p>
                        </div>
                    </div>
                    <NonDiscrimination/>
                </div>
            </div>
        );
    }
}
