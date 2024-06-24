import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import "./CSS/styles.css";
import "./CSS/fonts.css"
import "./CSS/button.css"


//import TeaGuide from "./TeaGuide.js"
//import TeamPage from "./TeamPage.js"
import Footer from "./Footer.js"

//<Route path="/teaguide" element={<TeaGuide />} />

import Banner from './Banner.js'
import Selection from './Selection.js'
import Team from './Team.js'
import Premium from './Premium.js'
import TeaGuide from './TeaGuide.js'
import Testimonial from './Testimonial.js'
import ContactUs from './ContactUs.js'





export default function App() {

  function LandingPage() {
  return (
    <div className='bodybg'>
      <Selection/>
      <Premium/>
      <TeaGuide/>
      <Team/>
      <Testimonial/>
      <ContactUs/>
    </div>
  );
}





  return (
    <Router>

      <Routes>
          <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}