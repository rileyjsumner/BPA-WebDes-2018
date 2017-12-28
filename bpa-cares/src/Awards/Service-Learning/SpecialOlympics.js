import React, { Component } from 'react';
import { ApplicationGuidelines } from '../../PageComponents/GeneralComponents/ApplicationGuidelines.js';
import{ Generalinfo } from '../../PageComponents/GeneralComponents/Generalinfo.js';
import { NonDiscrimination} from '../../PageComponents/GeneralComponents/Non-Discrimination.js';
import {Recognition} from '../../PageComponents/GeneralComponents/Recognition.js';
import { SplashPage } from '../../PageComponents/SplashPage.js';

export class SpecialOlympics extends Component {
    render() {
        return (
            <div className="Wrapper">
                <SplashPage/>
                <div className="awardWrapper">
                    <h1>Special Olympics Award</h1>
                    <h2>Purpose</h2>
                    <p>To recognize local chapters involved with Special Olympics.</p>
                    <h2>Eligibility</h2>
                    <p>All applicants must be in good standing with Business Professionals of America. This award is open to members in the Middle Level, Post-Secondary and Secondary Divisions who have completed at minimum 100 service hours or contributed at minimum $500.00 to a service organization.</p>
                    <h2>Guidelines and Application</h2>
                    <p>All applications must be submitted utilizing the online application. Submission applications must include all activity descriptions. Partial applications will not be accepted or combined. Do not begin the application online submission form until you have completed all activities. Applications due April 1.</p>
                    <h2>Qualification Period</h2>
                    <p>Activities completed between April 2, 2017 and April 1, 2018 (11:59 PM EST) can be counted towards this award.</p>
                    <h2>General Information</h2>
                    <p>Applicants may only count activities once in the BPA Cares Award Program, except Service Learning Individual and Chapter Activities Award of Excellence.</p>
                    <p>Chapters may complete more than one activity to equal the total number of hours/dollars. Activity descriptions cannot exceed 500 words in total.</p>
                    <p>Activities may include but are not limited to volunteering, training and/or contributing to paper recycling projects, school-wide recycling projecrs, school-based composting systems, solar panel installations, or school-wide energy audits.</p>
                    <p>All activity descriptions must include title, organization benefiting from the project, date project completed, location of the project, description of the project.</p>
                    <p>NO E-MAIL OR MAIL APPLICATIONS WILL BE ACCEPTED.</p>
                    <p>All materials submitted become the property of Business Professionals of America and may be used as the National Center deems appropriate.</p>
                    <p>It is not necessary for a chapter to attend the National Leadership conference to participate in the program and receive the award.</p>
                    <p>DO NOT SEND ANY AWARD APPLICATION(S) AS PART OF ANOTHER APPLICATION. AWARDS MAY NOT BE SUBMITTED WITH TECHNICAL PROJECTS FOR COMPETITIVE EVENTS. EACH AWARD MUST BE SUBMITTED SEPARATELY.</p>
                    <h2>Recognition</h2>
                    <p>100-249 service hours OR $500.00-$999.00 contribution: Certificate of Achievement 250+ service hours or $1000.00+: Award of Achievement and recognition on-stage at the National Leadership Conference</p>
                    <NonDiscrimination/>
                </div>
            </div>
        );
    }
}
