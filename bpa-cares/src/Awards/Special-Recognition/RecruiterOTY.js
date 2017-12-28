import React, { Component } from 'react';
import { ApplicationGuidelines } from '../../PageComponents/GeneralComponents/ApplicationGuidelines.js';
import{ Generalinfo } from '../../PageComponents/GeneralComponents/Generalinfo.js';
import { NonDiscrimination} from '../../PageComponents/GeneralComponents/Non-Discrimination.js';
import {Recognition} from '../../PageComponents/GeneralComponents/Recognition.js';
import { SplashPage } from '../../PageComponents/SplashPage.js';
export class RecruiterOTY extends Component {
    render() {
        return (
            <div className="Wrapper">
                <SplashPage/>
                <div className="awardWrapper">
                    <h1> Recruiter of the Year Award</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <h2> Eligibility</h2>
                            <p> All applicants must be in good standing with Business Professionals of America. This award is open to members in the Middle Level, Post- Secondary and Secondary Divisions. The member must earn a minimum of five points. The winners will be decided based on a point system. Every member recruited is worth one point. Every new chapter recruited at the Middle, Secondary, or Post-Secondary level is worth 15 points in addition to one point for every member recruited in the new chapter. The newly recruited members and chapter(s) must be listed on the application with their membership identification numbers (assigned by the BPA Online Membership Registration System). The local chapter advisor must verify electronically that the applicant recruited the listed members and chapter(s). The new chapter’s school name, division, and date formed must be listed. The recruited chapter can be in any division, not restricted to the applicant’s division only. New members are also eligible to apply for this award once registered as national members. A BPA member can receive this national award once annually. New members are members who have not held previous membership in Business Professionals of America, and new chapters are chapters which were not in active membership status in the previous three membership years in Business Professionals of America. </p>
                            <h2>Guidlines and Application</h2>
                            <p>All applications must be submitted utilizing the online application. Submission applications must include all activity descriptions. Partial applications will not be accepted or combined. Do not begin the application online submission form until you have completed all activities.</p>
                            <p> Application due April 1.</p>
                            <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSdbPT1vwJ3AokRh60YJ3j379ow1YxY39w0o0sMLNNrn2xYhhA/viewform"> Online Application </a></p>
                        </div>
                        <div className="col-md-6">
                        <h2>Purpose</h2>
                        <p>To encourage current student members of the Secondary, Post-Secondary, and Middle Level Divisions to recruit new BPA members and chapters.</p>
                            <h2>Qualification Period</h2>
                            <p> Activities completed between August 31, 2017 and February 15, 2018 (11:59 PM EST) can be counted toward this award. </p>
                            <h2> General information </h2>
                            <p> NO E-MAIL OR MAIL APPLICATIONS WILL BE ACCEPTED. </p>
                            <p>All materials submitted become the property of Business Professionals of America and may be used as the National Center deems appropriate.It is not necessary for the individual to attend the National Leadership Conference to participate in the program and receive the award. </p>
                            <p>DO NOT SEND ANY AWARD APPLICATION(S) AS PART OF ANOTHER APPLICATION. AWARDS MAY NOT BE SUBMITTED WITH TECHNICAL PROJECTS FOR COMPETITIVE EVENTS. EACH AWARD MUST BE SUBMITTED SEPARATELY</p>
                            <h2> Recognition </h2>
                            <p>BPA Recruiter of the Year Award: Approved applicants will receive a Certificate of Achievement. Each year the applicant with the most amount of recruiter points received, based on the above criteria, in their division will be recognized with a plaque as National Recruiter of the Year at a General Session during the NLC. </p>
                            <p> Having trouble with the BPA Cares Award? <a href="http://www.bpa.org/service/caresfaq"> Visit our Frequently Asked Questions page. </a> </p>
                        </div>
                    </div>
                    <NonDiscrimination />
                </div>
            </div>
        );
    }
}
