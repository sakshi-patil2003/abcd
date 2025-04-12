import React from 'react';
import AidsHero from '../components/Aids/AidsHero';
import AidsPointers from '../components/Aids/AidsPointers';
import AidsInovation from '../components/Aids/AidsInovation'
import AidsOverview from '../components/Aids/AidsOverview'
import AidsReasons from '../components/Aids/AidsReasons';
import AidsStudying from '../components/Aids/AidsStudying'
import AidsPlacement from '.././components/Aids/AidsPlacement'
import CompRecruter from '../components/Computer/CompRecruiter';
import AidsBrochure from '../components/Aids/AidsBrochure'
import AidsOfferings from "../components/Aids/AidsOfferings"
import AidsHighlights from '../components/Aids/AidsHighlights'
import AidsCareer from '../components/Aids/AidsCareer'
import AidsBanner from '../components/Aids/AidsBanner';
import AidsApply from '../components/Aids/AidsApply'
import AidsAdmisionCon from '../components/Aids/AidsAdmisionCon'
import AidsTestimonials from '../components/Aids/AidsTestimonials'
import AutoChatbot from '../components/AutoChatbot'
function Aids() {
  return (
    <div>
      <AidsHero />  {/* Hero component for Aids */}
      <AidsPointers />
      <AidsInovation/>
      <AidsOverview/>
      <AidsReasons/>
      <AidsStudying/>
      <AidsBrochure />  
      <AidsPlacement/>
      <CompRecruter/>
      <AidsOfferings/>
      <AidsHighlights/>
      <AidsCareer/>
      <AidsBanner/>
      <AidsApply/>
      <AidsAdmisionCon/>
      <AidsTestimonials />  
      <AutoChatbot />
    </div>
  );
}

export default Aids;
