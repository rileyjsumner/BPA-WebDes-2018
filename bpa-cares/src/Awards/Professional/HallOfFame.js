import React, { Component } from 'react';
import { ApplicationGuidelines } from '../../PageComponents/GeneralComponents/ApplicationGuidelines.js';
import{ Generalinfo } from '../../PageComponents/GeneralComponents/Generalinfo.js';
import { NonDiscrimination} from '../../PageComponents/GeneralComponents/Non-Discrimination.js';
import {Recognition} from '../../PageComponents/GeneralComponents/Recognition.js';
export class HallOfFame extends Component {
  render() {
    return (
      <div className="awardWrapper">
        <h1>Hall of Fame Award</h1>
        <h2>Purpose</h2>
        <p>To recognize those individuals who have made significant contributions at the national level to Business Professionals of America, formerly the Office Education Association (OEA).</p>
        <h2>Eligibility</h2>
        <p>Individuals who have contributed to the national association. The nominee must have made contributions and been involved at the local, state, and national levels for 10 or more years. To be eligible for the Hall of Fame award the nominator must submit the following information about the nominee:</p>
        <ol>
          <li> Nomination Form </li>
          <li> One page, single-spaced, narrative-style biography of nominee&#39;s supportive contributions to the national organization </li>
          <li> A maximum of three (3) letters of recommendation or the nominee. Information provided in the letters weighs heavily in evaluation. </li>
          <li> A State Advisor letter of support for the nominee, unless the nominee is a state advisor. The State Advisor&#39;s letter does not count as one of the three letters of recommendation. </li>
          <li> One page resume of Business Professionals of America-related accomplishments for the nominee.</li>
          <li> National staff and current student members are ineligible for this award. </li>
        </ol>
        <h2>Entries</h2>
        <p>Nominaions will be accepted every year for the following: National Officers, Board of Trustees, BPA State Advisors/Supervisors, National Staff, National Business Advisory Council, Classroom Educators Advisory Council, and Local Advisors.</p>
        <ApplicationGuidelines/>
        <Generalinfo/>
        <Recognition/>
        <NonDiscrimination/>
        </div>
      );
    }
  }
