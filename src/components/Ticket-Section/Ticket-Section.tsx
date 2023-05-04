import React from 'react';

import './Ticket-Section.scss';
import Filter from '../Filter';
import Sort from '../Sort';
import Ticket from '../Ticket';

function TicketSection() {
  return (
    <section className="ticket-section">
      <div className="container">
        <div className="ticket-section__content">
          <div className="ticket-section__left">
            <Filter />
          </div>
          <div className="ticket-section__right">
            <Sort />
            <Ticket />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TicketSection;
