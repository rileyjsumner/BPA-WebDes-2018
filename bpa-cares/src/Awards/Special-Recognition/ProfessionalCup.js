import React, { Component } from 'react';
import { NonDiscrimination} from '../../PageComponents/GeneralComponents/Non-Discrimination.js';
import { SplashPage } from '../../PageComponents/SplashPage.js';import '../../animation.css';
export class ProfessionalCup extends Component {
    render() {
        return (
            <div className="Wrapper">
                <SplashPage/>
                <h1> The Professional Cup Award </h1>
                <h2 className="ProfessionalCup"> (Outstanding State Participation) </h2>
                <div className="awardWrapper slideUp">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Purpose</h2>
                            <p>To encourage state associations to become actively involved in promoting participation in the BPA Cares Award Program by the local chapters and to recognize states with active participation; and to recognize outstanding state participation in BPA programs</p>
                            <h2>Qualification Period</h2>
                            <p> Activities completed between April 2, 2017 and April 1, 2018 (11:59 PM EST) can be counted towards this award. </p>
                            <h2> Ranking </h2>
                            <p>Each state association’s ranking will be determined by:</p>
                            <ol>
                                <li> The association’s percentage of chapters participating in the following BPA Cares Award Programs:
                                    <ul>
                                        <li> Service Learning Awards Program (all awards in this category are eligible) </li>
                                        <li> Marketing and Public Relations </li>
                                        <li> Chapter Activities Award of Excellence </li>
                                    </ul>
                                </li>
                                <li>The total number of chapters participating in the BPA Cares Award Program within the state.</li>
                                <li>The association’s percentage of members receiving their Ambassador Torch Award.</li>
                                <li>The total number of members receiving the Ambassador Torch Award within the state.</li>
                                <li>The association’s percentage of chapters meeting the criteria for the Membership Explosion Award.</li>
                                <li>The total number of chapters meeting the criteria for the Membership Explosion Award within the state.</li>
                                <li>The association’s percentage of chapters earning the <a target="_blank" href="http://www.bpa.org/application/qualitychapter.aspx">Quality Chapter Distinction.</a> </li>
                                <li>The total number of chapters earning the <a target="_blank" href="http://www.bpa.org/application/qualitychapter.aspx">Quality Chapter Distinction</a> within the state. </li>
                            </ol>
                            <p> The ranking in these eight (8) qualifications will determine eight (8) point values which, when added together, will constitute a final ranking. The state association who receives the best overall rank will receive the Professional Cup. In the event of a tie, the award will be given to the state association with the highest divisional increase in percentage of membership over the previous year.</p>
                        </div>
                        <div className="col-md-6">
                            <h2> Eligibility</h2>
                            <p>Any state association in the Middle Level, Post-Secondary or Secondary Division that has active participation in the BPA Cares Award Program.</p>
                            <p>An application is not required for this award. This is award is given directly from the National Center to the state meeting the criteria described below.</p>
                            <h2> General Information </h2>
                            <p> Chapters may complete more than one activity to equal the total number of hours/dollars.  </p>
                            <p> Activity descriptions cannot exceed 500 words in total. </p>
                            <p> Activities may include but are not limited to volunteering, training and or contributing to blood drives, clothing drives, food drives, disaster relief assistance or local community shelters. </p>
                            <p>All activity descriptions must include title, organization benefiting from the project, date project completed, location of the project, description of the project</p>
                            <h2> Recognition </h2>
                            <p> The award will be presented on stage during the National Leadership Conference. It will consist of a plaque for the state association to keep and the Professional Cup trophy with the state association’s name and the year it was won engraved on a 10-year engraving plate. The Professional Cup trophy will be in the winning state association’s possession for one year starting from the last day of the National Leadership Conference until the next National Leadership Conference, where it will be presented to the next winning state association. </p>
                            <p>After the tenth year, the trophy will be retired and presented to the state within each Division who won the award the most times during the ten years. </p>
                            <p> Having trouble with the BPA Cares Award? <a target="_blank" href="http://www.bpa.org/service/caresfaq"> Visit our Frequently Asked Questions page. </a> </p>
                        </div>
                    </div>
                    <NonDiscrimination />
                </div>
            </div>
        );
    }
}
