import React, { Component } from 'react';
import { ApplicationGuidelines } from '../../PageComponents/GeneralComponents/ApplicationGuidelines.js';
import{ Generalinfo } from '../../PageComponents/GeneralComponents/Generalinfo.js';
import { NonDiscrimination} from '../../PageComponents/GeneralComponents/Non-Discrimination.js';
import {Recognition} from '../../PageComponents/GeneralComponents/Recognition.js';
import { SplashPage } from '../../PageComponents/SplashPage.js';

export class MembershipExplosion extends Component {
    render() {
        return (
            <div className="Wrapper">
                <SplashPage/>
                <div className="awardWrapper slideUp">
                <h2>Purpose</h2>
              <p>To recognize outstanding chapters who have successfully recruited members to their chapters,
adding to the overall strength and size of our organization.</p>
      <h2>Eligibility</h2>
      <p>All applicants must be in good standing with Business Professionals of America. This award is
      open to members of the Middle Level, Post-Secondary and Secondary Divisions. Applicants must
      have at least 15 registered members in good standing during the previous membership year and
      experience a minimum of 30% increase from their previous year.</p>
       <p>An application is not required for this award. The award will be given by the National Center
       to those chapters meeting the criteria.</p>
       <h2>Qualification Period</h2>
       <p>Activities completed between the beginning of the membership year through February 15,
       2018 (11:59 PM EST) can be counted toward this award.</p>
       <h2>General Information</h2>
       <p>It is not necessary for the individual to attend the National Leadership Conference to participate in
       the program and receive the award.</p>
       <h2>Recognition</h2>
       <p>Chapters with the minimum increase will receive a Certificate of Achievement. The top overall
       chapter in each division with the highest number growth will receive an Award of Achievement and
       recognition on-stage at the National Leadership Conference and the overall top chapter in each
       division with the highest percentage growth will receive an Award of Achievement and recognition
       on-stage at the National Leadership Conference.</p>
       <p> Having trouble with the BPA Cares Award? <a href="http://www.bpa.org/service/caresfaq"> Visit our Frequently Asked Questions page. </a> </p>
       <NonDiscrimination />

                </div>
            </div>
        );
    }
}
