import React, { Component } from 'react';
import { ApplicationGuidelines } from '../../PageComponents/GeneralComponents/ApplicationGuidelines.js';
import{ Generalinfo } from '../../PageComponents/GeneralComponents/Generalinfo.js';
import { NonDiscrimination} from '../../PageComponents/GeneralComponents/Non-Discrimination.js';
import {Recognition} from '../../PageComponents/GeneralComponents/Recognition.js';
import { SplashPage } from '../../PageComponents/SplashPage.js';

export class MarketingAndPR extends Component {
    render() {
        return (
            <div className="Wrapper">
                <SplashPage/>
                <div className="awardWrapper slideUp">

                </div>
            </div>
        );
    }
}
