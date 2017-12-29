import React, { Component } from 'react';
import { ApplicationGuidelines } from '../../PageComponents/GeneralComponents/ApplicationGuidelines.js';
import{ Generalinfo } from '../../PageComponents/GeneralComponents/Generalinfo.js';
import { NonDiscrimination} from '../../PageComponents/GeneralComponents/Non-Discrimination.js';
import {Recognition} from '../../PageComponents/GeneralComponents/Recognition.js';
import { SplashPage } from '../../PageComponents/SplashPage.js';

export class ServiceLearningIndiv extends Component {
    render() {
        return (
            <div className="Wrapper">
                <SplashPage/>
                <div className="awardWrapper slideUp">
                    <h1>Service Learning Individual Award</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Purpose</h2>
                            <p>To recognize local members involved in Service Learning.</p>
                            <h2>Eligibility</h2>
                            <p>All applicants must be in good standing with Business Professionals of America. This award is open to members in the Middle Level, Post-Secondary and Secondary Divisions who provide a minimum of 500 hours of service learning to their community and have earned the President&#39;s Volunteer Servcie Award withing the same membership year.</p>
                            <h2>Guidelines and Application</h2>
                            <p>All applications must be submitted utilizing the online application. Submission applications must include all activity descriptions. Partial applications will not be accepted or combined. Do not begin the application online submission form until you have completed all activities. Applications due April 1.</p>
                            <ol>
                                <li>Activities may be used in other individual or chapter activities.</li>
                                <li>Provide the total number of hours per actovity and the total hours involved with Service Learning.</li>
                            </ol>
                            <h2>Qualification Period</h2>
                            <p>Activities completed between April 2, 2017 and April 1, 2018 (11:59 PM EST) can be counted towards this award, with the exception of activities accrued through the President&#39;s Volunteer Service Award. PVSA activities may be accumulated through the span of multiple years.</p>
                        </div>
                        <div className="col-md-6">
                            <h2>General Information</h2>
                            <p>Applicants may only count activities once in the BPA Cares Award Program, except Service Learning Individual and Chapter Activities Award of Excellence.</p>
                            <p>Individuals may complete more than one activity to equal the total number of hours/dollars. Activity descriptions cannot exceed 500 words in total.</p>
                            <p>Activities may include but are not limited to volunteering, training and/or contributing to blood drives, clothing drives, food drives, disaster relief assistance or local community shelters.</p>
                            <p>All activity descriptions must include title, organization benefiting from the project, date project completed, location of the project, description of the project.</p>
                            <p>NO E-MAIL OR MAIL APPLICATIONS WILL BE ACCEPTED.</p>
                            <p>All materials submitted become the property of Business Professionals of America and may be used as the National Center deems appropriate.</p>
                            <p>It is not necessary for the individual to attend the National Leadership conference to participate in the program and receive the award.</p>
                            <p>DO NOT SEND ANY AWARD APPLICATION(S) AS PART OF ANOTHER APPLICATION. AWARDS MAY NOT BE SUBMITTED WITH TECHNICAL PROJECTS FOR COMPETITIVE EVENTS. EACH AWARD MUST BE SUBMITTED SEPARATELY.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Recognition</h2>
                            <p>500 service hours: Certificate of Achievement. One Award of Achievement per Division will be given to the individual with the highest number of service hours and recognition on-stage at the National Leadership Conference.</p>
                        </div>
                    </div>
                    <NonDiscrimination/>
                </div>
            </div>
        );
    }
}
