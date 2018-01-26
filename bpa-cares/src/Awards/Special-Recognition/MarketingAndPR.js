import React, { Component } from 'react';
import { NonDiscrimination} from '../../PageComponents/GeneralComponents/Non-Discrimination.js';
import { SplashPage } from '../../PageComponents/SplashPage.js';import '../../animation.css';

export class MarketingAndPR extends Component {
    render() {
        return (
            <div className="Wrapper">
                <SplashPage/>
                <h1>BPA Marketing and Public Relations Award</h1>
                <div className="awardWrapper slideUp">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Purpose</h2>
                            <p>  To promote the image of Business Professionals of America and its members; to inform the public of the meaning and objectives of BPA; to encourage the creation of media promotions, especially chapter newsletters and Websites promoting BPA; and to encourage organized local chapter membership recruiting efforts/activities. </p>
                            <h2> Eligibility </h2>
                            <p>All applicants must be in good standing with Business Professionals of America. This award is open to members in the Middle Level, Post-Secondary and Secondary Divisions who have completed at minimum one activity which does one of the following: promotes the image of Business Professionals of America and its members, informs the public of the meaning and objectives of BPA, encourages the creation of media promotions, especially chapter newsletters and Websites promoting BPA and/or encourages organized local chapter membership recruiting efforts/activities</p>
                            <h2>Guidelines & Application</h2>
                            <p>All applications must be submitted utilizing the online application. Submission applications must include all activity descriptions. Partial applications will not be accepted or combined. Do not begin the application online submission form until you have completed all activities.</p>
                            <p>Applications due April 1.</p>
                            <p><a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSebfwnWt7OvmQY2hCfM-4DJqZlQU7vlOnyk2sFi1ssldI8dRQ/viewform">Online Application</a></p>
                            <h2>Recognition</h2>
                            <p>BPA Marketing & Public Relations: Chapters completing the minimum number of activities will receive a Certificate of Achievement. Chapters completing five or more activities will receive a Award of Achievement and recognition on-stage at the National Leadership Conference.</p>
                            <p> Having trouble with the BPA Cares Award? <a target="_blank" rel="noopener noreferrer" href="http://www.bpa.org/service/caresfaq"> Visit our Frequently Asked Questions page. </a> </p>
                        </div>
                        <div className="col-md-6">
                            <h2>General Information</h2>
                            <p>Applicants may only count activities once in the BPA Cares Award Program, except Service Learning Individual and Chapter Activities Award of Excellence.</p>
                            <p>Chapters may complete more than one activity to equal the total number of hours/dollars. Activity descriptions cannot exceed 500 words in total.</p>
                            <p>Activities may include but are not limited to</p>
                            <ul>
                                <li>any activity that promotes BPA in the school or community</li>
                                <li>any activity that builds good public relations and is reported in the media (document media release)</li>
                                <li>any chapter newsletter that is distributed to school or community members (outside the chapter membership, include document distribution)</li>
                                <li>any chapter Website promoting the chapter and /or BPA members (document Website)</li>
                                <li>any organized chapter membership recruiting activity</li>
                            </ul>
                            <p>All activity descriptions must include title, project details, date project completed, location of the project and description of the project.</p>
                            <p>NO E-MAIL OR MAIL APPLICATIONS WILL BE ACCEPTED.</p>
                            <p>All materials submitted become the property of Business Professionals of America and may be used as the National Center deems appropriate.</p>
                            <p>It is not necessary for a chapter to attend the National Leadership Conference to participate in the program and receive the award.</p>
                            <p>DO NOT SEND ANY AWARD APPLICATION(S) AS PART OF ANOTHER APPLICATION. AWARDS MAY NOT BE SUBMITTED WITH TECHNICAL PROJECTS FOR COMPETITIVE EVENTS. EACH AWARD MUST BE SUBMITTED SEPARATELY.</p>
                        </div>
                    </div>
                    <NonDiscrimination />
                </div>
            </div>
        );
    }
}
