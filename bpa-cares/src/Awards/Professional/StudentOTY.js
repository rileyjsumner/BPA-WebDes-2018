import React, { Component } from 'react';
import { ApplicationGuidelines } from '../../PageComponents/GeneralComponents/ApplicationGuidelines.js';
import{ Generalinfo } from '../../PageComponents/GeneralComponents/Generalinfo.js';
import { NonDiscrimination} from '../../PageComponents/GeneralComponents/Non-Discrimination.js';
import {Recognition} from '../../PageComponents/GeneralComponents/Recognition.js';
export class StudentOTY extends Component {
  render() {
    return (
      <div className="awardWrapper">
        <h1>Student of the Year Award</h1>
        <h2>Purpose</h2>
        <p>To recognize those students who have made significant contributions to Business Professionals of America as a student member</p>
        <h2> Eligibility</h2>
        <p>Registered, student members in good standing with Business Professionals of America. Current or former National Officers will not be considered for this award. To be eligible for the Student of the Year award the applicant must meet all of the following criteria:</p>
        <ol>
          <li> Completed a minimum of one full year as a student member </li>
          <li> Served as a local, regional or state officer </li>
          <li> Attended a minimum of one (1) State Leadership Conference and one (1) National Leadership Conference (Required for Secondary) </li>
          <li> Competed in the WSAP </li>
          <li> Earned the Ambassador Torch Award </li>
          <li> Participated in the BPA Cares Program </li>
        </ol>
        <p>The applicant must also meet a minimum of five (5) of the following criteria:</p>
        <ol>
          <li>Attended a minimum of one (1) State Leadership Conference and/or one (1) National Leadership Conference (Optional for Post-Secondary)</li>
          <li>Earned the National Merit Scholar Award</li>
          <li>Participated in the Intern Program at the National Leadership Conference</li>
          <li>Participated in the Leadership Academy at the National Leadership Conference</li>
          <li>Made significant contributions to Special Olympics</li>
          <li>Earned the President&#39;s Volunteer Service Award</li>
          <li>Completed the Student Member Certification Series</li>
          <li>Earned the BPA Cares Recruiter of the Year Award</li>
          <li>Completed the Life Skills Achievement Program</li>
        </ol>
        <p>Lastly, the applicant must submit the following information:</p>
        <ol>
          <li>Application form</li>
          <li>Narrative review of appicant&#39;s supportive contributions to BPA on the local, regional, state or national levels</li>
          <li>Two letters of support for the applicant</li>
          <li>One letter msut be from a local advisor</li>
          <li>One letter must be from the state advisor</li>
          <li>Resume for the applicant</li>
        </ol>
        <ApplicationGuidelines/>
        <Generalinfo/>
        <h2>Recognition</h2>
        <p>A maximum of one (1) individual from the Secondary and one (1) individual from the Post-Secondary Division will be recognized with a plaque on stage at the National Leadership Conference</p>
        <NonDiscrimination/>
        </div>
      );
    }
  }
