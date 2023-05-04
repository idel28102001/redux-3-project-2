import React from 'react';

import logo from '../../assets/logo.png';
import Container from '../Container';

import styles from './Logo.module.scss';

function Logo() {
  return (
    <section className={styles.logo}>
      <Container>
        <div className={styles.logo__content}>
          <img className={styles.logo__img} src={logo} alt="Лого" />
        </div>
      </Container>
    </section>
  );
}

export default Logo;
