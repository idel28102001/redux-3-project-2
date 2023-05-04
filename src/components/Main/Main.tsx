import React from 'react';

import TicketSection from '../Ticket-Section';

import styles from './Main.module.scss';

function Main() {
  return (
    <main className={styles.main}>
      <TicketSection />
    </main>
  );
}

export default Main;
