import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import "./CSS/styles.css";
import "./CSS/fonts.css"
import "./CSS/button.css"


import LandingPage from "./LandingPage.js"
//import TeaGuide from "./TeaGuide.js"
//import TeamPage from "./TeamPage.js"
import Footer from "./Footer.js"

//<Route path="/teaguide" element={<TeaGuide />} />
//<Route path="/aboutus" element={<TeamPage  />} />

export default function App() {
  return (
    <Router>

      <Routes>
          <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}