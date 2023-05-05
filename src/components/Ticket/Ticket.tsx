import React, { useEffect, useState } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';

import Button from '../Button';
import Card from '../Card';
import { useTypedSelect } from '../../hooks/useTypedSelect';
import { ticketActionCreators } from '../../store/reducers/tickets/action-creators';
import { useTypedDispatch } from '../../hooks/useTypedDispatch';
import TicketsService from '../../services/TicketsService';
import Loader from '../Loader';

import styles from './Ticket.module.scss';

function Ticket() {
  const [limit, setLimit] = useState(5);
  const {
    tickets: { tickets: rawTickets, error, isLoading },
    sort: { status },
    filter: { filters },
  } = useTypedSelect((state) => state);
  const dispatch = useTypedDispatch();
  const { fetchTickets } = bindActionCreators(ticketActionCreators, dispatch);
  const { tickets, wholeLen } = TicketsService.formatTickets(rawTickets, status, filters, limit);
  useEffect(() => {
    const controller = new AbortController();
    fetchTickets(controller);
    return () => {
      controller.abort();
    };
  }, []);

  const list = (
    <ul className={styles.ticket__list}>
      {tickets.map((e) => (
        <li key={e.id}>
          <Card item={e} />
        </li>
      ))}
    </ul>
  );
  const noInfo = 'Рейсов, подходящих под заданные фильтры, не найдено';
  const content = !tickets.length ? noInfo : list;
  return (
    <div className={styles.ticket}>
      {isLoading && <Loader />}
      {error}
      <div>{content}</div>
      <div className={styles.ticket__down}>
        <div className={styles.ticket__more}>
          {limit < wholeLen && (
            <Button parentClass={styles.ticket__button} onClickButton={() => setLimit((limit) => limit + 5)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Ticket;
