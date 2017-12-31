import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter, Route } from 'react-router-dom';
import { AdvisorOTY } from './Awards/Professional/AdvisorOTY';
import { EmergingAdvisorOTY } from './Awards/Professional/EmergingAdvisorOTY';
import { EmergingProfessionalOTY } from './Awards/Professional/EmergingProfessionalOTY';
import { HallOfFame } from './Awards/Professional/HallOfFame';
import { OutstandingService } from './Awards/Professional/OutstandingService';
import { StudentOTY } from './Awards/Professional/StudentOTY';
import { CommunityService } from './Awards/Service-Learning/CommunityService';
import { EnvironmentalAction } from './Awards/Service-Learning/EnvironmentalAction';
import { SafetyAwareness } from './Awards/Service-Learning/SafetyAwareness';
import { ServiceLearningIndiv } from './Awards/Service-Learning/ServiceLearningIndiv';
import { SpecialOlympics } from './Awards/Service-Learning/SpecialOlympics';
import { AwardOfExcellence } from './Awards/Special-Recognition/AwardOfExcellence';
import { MarketingAndPR } from './Awards/Special-Recognition/MarketingAndPR';
import { MembershipExplosion } from './Awards/Special-Recognition/MembershipExplosion';
import { MeritScholar } from './Awards/Special-Recognition/MeritScholar';
import { ProfessionalCup } from './Awards/Special-Recognition/ProfessionalCup';
import { RecruiterOTY } from './Awards/Special-Recognition/RecruiterOTY';
import { SocialMedia } from './Awards/Special-Recognition/SocialMedia';
import { Professional } from './Awards/Professional/Professional'
import { ServiceLearning } from './Awards/Service-Learning/ServiceLearning';
import { SpecialRecognition } from './Awards/Special-Recognition/SpecialRecognition';
import { Login } from './Progress/Login/Login';

ReactDOM.render(
    (
        <HashRouter>
            <div>
                <Route exact path="/" component={App}/>
                <div id="Professional">
                    <Route exact path="/Professional" component={Professional}/>
                    <Route exact path="/Professional/Advisor-of-the-Year" component={AdvisorOTY}/>
                    <Route exact path="/Professional/Emerging-Advisor" component={EmergingAdvisorOTY}/>
                    <Route exact path="/Professional/Emerging-Professional" component={EmergingProfessionalOTY}/>
                    <Route exact path="/Professional/Hall-Of-Fame" component={HallOfFame}/>
                    <Route exact path="/Professional/Oustanding-Service-Award" component={OutstandingService}/>
                    <Route exact path="/Professional/Student-of-the-Year" component={StudentOTY}/>
                </div>
                <div id="ServiceLearning">
                    <Route exact path="/ServiceLearning/" component={ServiceLearning}/>
                    <Route exact path="/ServiceLearning/Community-Service" component={CommunityService}/>
                    <Route exact path="/ServiceLearning/Environmental-Action" component={EnvironmentalAction}/>
                    <Route exact path="/ServiceLearning/Safety-Awareness" component={SafetyAwareness}/>
                    <Route exact path="/ServiceLearning/Service-Learning-Individual" component={ServiceLearningIndiv}/>
                    <Route exact path="/ServiceLearning/Special-Olympics" component={SpecialOlympics}/>
                </div>
                <div id="SpecialRecognition">
                    <Route exact path="/SpecialRecognition/" component={SpecialRecognition}/>
                    <Route exact path="/SpecialRecognition/BPA-Marketing-and-Public-Relations" component={MarketingAndPR}/>
                    <Route exact path="/SpecialRecognition/BPA-Merit-Scholar" component={MeritScholar}/>
                    <Route exact path="/SpecialRecognition/Chapter-Activities-Award-of-Excellence" component={AwardOfExcellence}/>
                    <Route exact path="/SpecialRecognition/Recruiter-of-the-Year" component={RecruiterOTY}/>
                    <Route exact path="/SpecialRecognition/Membership-Explosion" component={MembershipExplosion}/>
                    <Route exact path="/SpecialRecognition/Social-Media" component={SocialMedia}/>
                    <Route exact path="/SpecialRecognition/Professional-Cup" component={ProfessionalCup}/>
                </div>
                <div id="Progress">
                    <Route exact path="/Login" component={Login}/>
                </div>
            </div>
        </HashRouter>
    ), document.getElementById('root'));
registerServiceWorker();
