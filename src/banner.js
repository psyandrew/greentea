import './CSS/fonts.css'
import './CSS/button.css'
import Header from './componentsL2/Header.js'


export default function Banner() {


  function toAboutUs() {
    const aboutUsSection = document.getElementById('aboutus');
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="TeaBanner bg">
        <Header />
    </div>
  );
}
