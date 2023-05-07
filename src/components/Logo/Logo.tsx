import React from 'react';

import logo from '../../assets/logo.png';
import Container from '../Container';

import styles from './Logo.module.scss';

function Logo() {
  return (
    <section className={styles.root}>
      <Container>
        <div className={styles.content}>
          <img className={styles.img} src={logo} alt="Лого" />
        </div>
      </Container>
    </section>
  );
}

export default Logo;
