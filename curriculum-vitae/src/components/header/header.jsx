import React from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from './logo_laia_solanes.png';

import './header.css';

export default function Header() {
  return (
    <header>
      <div className="flex header">

        <div className="header__image">
          <img src={logo} alt="logo" />
        </div>

        <div className="flex header__menu">

          <nav>
            <ul className="flex">
              <AnchorLink href="#presentation" className="nav__item"><li>Presentació</li></AnchorLink>
              <AnchorLink href="#skills" className="nav__item"><li>Skills</li></AnchorLink>
              <AnchorLink href="#experience" className="nav__item"><li>Experiència</li></AnchorLink>
              <AnchorLink href="#education" className="nav__item"><li>Formació</li></AnchorLink>
              <AnchorLink href="#contact" className="nav__item"><li>Contacte</li></AnchorLink>
            </ul>
          </nav>

        </div>

      </div>
    </header>
  );
}
