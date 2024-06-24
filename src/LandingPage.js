
import Selection from './Selection.js'
import Team from './Team.js'
import Premium from './Premium.js'
import TeaGuide from './TeaGuide.js'
import Testimonial from './Testimonial.js'
import ContactUs from './ContactUs.js'


import './CSS/fonts.css'
import './CSS/button.css'
import './CSS/animations.css'

export default function LandingPage() {
  return (
  	<div className='bodybg'>
      <Banner />
      <Selection/>
      <Premium/>
      <TeaGuide/>
      <Team/>
      <Testimonial/>
      <ContactUs/>
    </div>
  );
}