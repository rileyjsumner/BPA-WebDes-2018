import React, { Component } from 'react';
import { ApplicationGuidelines } from '../../PageComponents/GeneralComponents/ApplicationGuidelines.js';
import{ Generalinfo } from '../../PageComponents/GeneralComponents/Generalinfo.js';
import { NonDiscrimination} from '../../PageComponents/GeneralComponents/Non-Discrimination.js';
import {Recognition} from '../../PageComponents/GeneralComponents/Recognition.js';
import { SplashPage } from '../../PageComponents/SplashPage.js';import '../../animation.css';

export class EmergingAdvisorOTY extends Component {
    render() {
        return (
            <div className="Wrapper">
                <SplashPage/>
                <div className="awardWrapper slideUp">
                    <h1>Emerging Advisor of the Year</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Purpose</h2>
                            <p>To recognize an individual who has made significant contributions to Business Professional America as a local chapter advisor with five years or less of service. </p>
                            <h2> Eligibility</h2>
                            <p>Registered, local chapter advisors in good standing with Business Professionals of America. To be eligible for the Advisor of the Year award the nominator must submit the following information about the nominee: </p>
                            <ol>
                                <li> Nomination Form </li>
                                <li> Narrative review of nominee’s supportive contributions to BPA </li>
                                <li> Three letters of support for the nominee </li>
                                <li> One letter must be from an administrator </li>
                                <li> One letter must be from a current student </li>
                                <li> Resume for the nominee </li>
                            </ol>
                            <Recognition/>
                        </div>
                        <div className="col-md-6">
                            <ApplicationGuidelines/>
                            <Generalinfo/>
                        </div>
                    </div>
                    <NonDiscrimination/>
                </div>
            </div>
        );
    }
}
