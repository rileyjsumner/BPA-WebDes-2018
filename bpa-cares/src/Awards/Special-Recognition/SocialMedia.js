import React, { Component } from 'react';
import { ApplicationGuidelines } from '../../PageComponents/GeneralComponents/ApplicationGuidelines.js';
import{ Generalinfo } from '../../PageComponents/GeneralComponents/Generalinfo.js';
import { NonDiscrimination} from '../../PageComponents/GeneralComponents/Non-Discrimination.js';
import {Recognition} from '../../PageComponents/GeneralComponents/Recognition.js';
import { SplashPage } from '../../PageComponents/SplashPage.js';

export class SocialMedia extends Component {
    render() {
        return (
            <div className="Wrapper">
                <SplashPage/>
                <div className="awardWrapper">
                    <h1>Social Media Award</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Purpose</h2>
                            <p>To encourage local chapters to become actively involved in the National Officer Team Social Media Challenges; and to encourage local chapters to publicize their local activities and events.</p>
                            <h2>Eligibility</h2>
                            <p>All applicants must be in good standing with Business Professionals of America. This award is open to members in the Middle Level, Secondary and Post-Secondary Divisions. Business Professionals of America will be hosting a variety of challenges throughout the year on various social media outlets. Each chapter must fulfill at least four of the activities and write one activity description using the online application (500 word maximum). Descriptions must include a narrative of the activities (what happened, how it went, who was involved) and links to chapter social media pages where the activities took place. These challenges are (must complete 3):</p>
                            <ol>
                                <li>Join your National Officer Team as they host a Tweet-A-Thon, using “#BPAAllDay”.</li>
                                <li>BPA will be conducting a “Chapter Social Week Challenge” in November. Members are encouraged to participate in social events together as a chapter. These challenges will count toward Torch Award points. Multiple challenge activities will be announced on the BPA national social media sites. Chapters will complete multiple challenges which will then be documented through photography or videography and can be submitted to the National Facebook Page or Twitter account using “#BPASocial”.</li>
                                <li>BPA will be conducting a “BPA Week Challenge”, which will consist of different “challenges” each day of the week beginning the second full week in February coinciding with BPA Week. Members will document completion of challenges through either photography or videography submitted to the National Facebook Page or Twitter account using the hashtag “#BPAWeekChallenge”.</li>
                                <li>In an effort to enhance your digital citizenship, establish a committee to complete the requirements of the “Social Media Etiquette” course sponsored by Next Step Academy. This committee should lead in a presentation that covers, but is not limited to, general etiquette of social media, being mindful of social media’s impact, how to maintain a professional image on social media, etc.</li>
                                <li>In an effort to enhance your digital citizenship, establish a committee to complete the requirements of the “Social Media Essentials and College Admissions for Business Professionals of America” course sponsored by Social Assurity. This committee should lead in a presentation that covers, but is not limited to, general etiquette of social media, being mindful of social media’s impact, how to maintain a professional image on social media, etc.</li>
                            </ol>
                        </div>
                        <div className="col-md-6">
                            <h2>Guidlines and Application</h2>
                            <p>Applications must be submitted utilizing the online application. Submission applications must include all activity descriptions. Partial applications will not be accepted or combined. Do not begin the application online submission form until you have completed all activities</p>
                            <p> Applications due April 1.</p>
                            <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSd4POZSfVtxKCe28uR7qe3RV-UhNuq8abOKg8Q7oWtksYWJrw/viewform">Online Application</a></p>
                            <h2>Qualification Period</h2>
                            <p>Activities completed between April 2, 2017 and April 1, 2018 (11:59 PM EST) can be counted towards this award.</p>
                            <h2>General Information</h2>
                            <p>Applicants may only count activities once in the BPA Cares Award Program, except Service Learning Individual and Chapter Activities Award of Excellence.</p>
                            <p>Activity descriptions cannot exceed 500 words in total.</p>
                            <h2>NO E-MAIL OR MAIL APPLICATIONS WILL BE ACCEPTED.</h2>
                            <p>All materials submitted become the property of Business Professionals of America and may be used as the National Center deems appropriate. It is not necessary for a chapter to attend the National Leadership Conference to participate in the program and receive the award.</p>
                            <p>DO NOT SEND ANY AWARD APPLICATION(S) AS PART OF ANOTHER APPLICATION. AWARDS MAY NOT BE SUBMITTED WITH TECHNICAL PROJECTS FOR COMPETITIVE EVENTS. EACH AWARD MUST BE SUBMITTED SEPARATELY.</p>
                            <h2>Recognition</h2>
                            <p>Chapters who complete a minimum of four (4) activities will receive a Certificate of Achievement.</p>
                            <p>The top chapter in each Division completing the most activities will receive an Award of Achievement and recognition on-stage at the National Leadership Conference.</p>
                            <p>Having trouble with the BPA Cares Award? Visit our <a href="http://www.bpa.org/service/caresfaq">Frequently Asked Questions page.</a></p>
                        </div>
                    </div>
                    <NonDiscrimination/>
                </div>
            </div>
        );
    }
}
