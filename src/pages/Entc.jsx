import React from 'react'
import EntcHero from '../components/Entc/EntcHero'  // Import the EntcHero component
import EntcFacility from '../components/Entc/EntcFacility'  // Import the EntcFacility component
import EntcApply from '../components/Entc/EntcApply'
import EntcBrochure from '../components/Entc/EntcBrochure'
import EntcPointers from '../components/Entc/EntcPointers'
import EntcOfferings from '../components/Entc/EntcOfferings'
import EntcStudying from '../components/Entc/EntcStudying'
import EntcTestimonials from '../components/Entc/EntcTestimonials'
import MechJourny from '../components/Mech/MechJourny'
import EntcInovation from "../components/Entc/EntcInovation"
import EntcOverview from '../components/Entc/EntcOverview'
import EntcReasons from "../components/Entc/EntcReasons"
import EntcCareer from '../components/Entc/EntcCareer'
import EntcPlacement from '../components/Entc/EntcPlacement'
import EntcRecruiters from '../components/Entc/EntcRecruiters'
import EntcHighlights from '../components/Entc/EntcHighlights'
import EntcAdmission from '../components/Entc/EntcAdmission'
// import AutoChatbot from '../components/AutoChatbot'  // Import AutoChatbot

function Entc() {
  return (
    <div>
        <EntcHero />  {/* Call the EntcHero component */}
        <EntcPointers />  {/* Call the EntcPointers component */}
        <EntcInovation/>
        <EntcOverview/>
        <EntcReasons/>
        <EntcStudying />
        <EntcBrochure />
        <EntcCareer/>
        <EntcPlacement/>
        <EntcRecruiters/>
        <EntcOfferings />  {/* Call the EntcOfferings component */}
        <EntcHighlights/>
        <EntcAdmission/>
        <EntcApply />
        <EntcTestimonials />  {/* Call the EntcTestimonials component */}
        <MechJourny/>
    </div>
  )
}

export default Entc