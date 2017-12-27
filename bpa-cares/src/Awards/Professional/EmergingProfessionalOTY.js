import React, { Component } from 'react';
import { ApplicationGuidelines } from '../../PageComponents/GeneralComponents/ApplicationGuidelines.js';
import{ Generalinfo } from '../../PageComponents/GeneralComponents/Generalinfo.js';
import { NonDiscrimination} from '../../PageComponents/GeneralComponents/Non-Discrimination.js';
import {Recognition} from '../../PageComponents/GeneralComponents/Recognition.js';
export class EmergingProfessionalOTY extends Component {
  render() {
    return (
      <div className="awardWrapper">
        <h1>Emerging Professional of the Year Award</h1>
        <h2>Purpose</h2>
        <p>To recognize registered alumni in good standing who made their mark as professionals and contributed to Business Professionals of America within their first five years of service to the Association.</p>
        <h2>Eligibility</h2>
        <p>Individuals who have contributed to the national association. To be eligible for the Emerging Professional award the nominator must submit the following information about the nominee:</p>
        <ol>
          <li> Nomination Form </li>
          <li> Narrative review of nominee’s supportive contributions to BPA </li>
          <li> Three letters of support for the nominee </li>
          <li> Resume for the nominee </li>
        </ol>
        <ApplicationGuidelines/>
        <Generalinfo/>
        <Recognition/>
        <NonDiscrimination/>
        </div>
      );
    }
  }
