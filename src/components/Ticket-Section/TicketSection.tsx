import React from 'react';

import Filter from '../Filter';
import Sort from '../Sort';
import Ticket from '../Ticket';
import Container from '../Container';

import styles from './TicketSection.module.scss';

function TicketSection() {
  return (
    <section>
      <Container>
        <div className={styles.content}>
          <div>
            <Filter />
          </div>
          <div>
            <Sort />
            <Ticket />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default TicketSection;
