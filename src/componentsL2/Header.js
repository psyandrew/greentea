import {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

export default function Header() {


  function ClickLink({ str, func }) {
    return (
    <p onClick={func}>
      {str}
    </p>
  );
}

  function toPage(openLink) {
  return function() {
    window.open(openLink, '_blank');
    };
  }

  function toSection(section) {
    const sectionId = document.getElementById(section);
    if (sectionId ) {
      sectionId.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  return <nav className="header">
          <span className ="hLinks font-montserrat-bold ">
            <span className="brandName">
              <FontAwesomeIcon icon={faLeaf} size="2xl"  style={{color: "#61aa55"}} />
              <p>TAGATAY TEA</p>
            </span>
            <span className ='navLinks'>

              <ClickLink str = 'SELECTIONS' func= {() => toSection('selection')} />
              <ClickLink str = 'ABOUT US' func= { () =>toSection('aboutus')} />
              <ClickLink str = 'SHOP' func= {() =>toPage('https://www.instagram.com ')} />
              <ClickLink str = 'CONTACTS' func= { () =>toSection('selection')} />

            </span>
          </span>
         </nav>;
}
