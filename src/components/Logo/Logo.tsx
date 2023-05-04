import React from 'react';

import './Logo.scss';
import logo from '../../assets/logo.png';

function Logo() {
  return (
    <section className="logo">
      <div className="container">
        <div className="logo__content">
          <img className="logo__img" src={logo} alt="Лого" />
        </div>
      </div>
    </section>
  );
}

export default Logo;
