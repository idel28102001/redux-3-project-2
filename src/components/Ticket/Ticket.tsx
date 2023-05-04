import React from 'react';

import Button from '../Button';
import Card from '../Card';
import { ICard } from '../Card/Card';

import styles from './Ticket.module.scss';

function Ticket() {
  const cards: Array<ICard> = [
    {
      id: 1,
      info: { price: '13 400 Р', logo: '' },
      infoItems: [
        {
          id: 1,
          timeItems: [
            { id: 1, heading: 'MOW – HKT', description: '10:45 – 08:00' },
            { id: 2, heading: 'В пути', description: '21ч 15м' },
            { id: 3, heading: '2 пересадки', description: 'HKG, JNB' },
          ],
        },
        {
          id: 2,
          timeItems: [
            { id: 1, heading: 'MOW – HKT', description: '11:20 – 00:50' },
            { id: 2, heading: 'В пути', description: '13ч 30м' },
            { id: 3, heading: '1 пересадка', description: 'HKG' },
          ],
        },
      ],
    },
    {
      id: 2,
      info: { price: '13 400 Р', logo: '' },
      infoItems: [
        {
          id: 1,
          timeItems: [
            { id: 1, heading: 'MOW – HKT', description: '10:45 – 08:00' },
            { id: 2, heading: 'В пути', description: '21ч 15м' },
            { id: 3, heading: '2 пересадки', description: 'HKG, JNB' },
          ],
        },
        {
          id: 2,
          timeItems: [
            { id: 1, heading: 'MOW – HKT', description: '11:20 – 00:50' },
            { id: 2, heading: 'В пути', description: '13ч 30м' },
            { id: 3, heading: '1 пересадка', description: 'HKG' },
          ],
        },
      ],
    },
    {
      id: 3,
      info: { price: '13 400 Р', logo: '' },
      infoItems: [
        {
          id: 1,
          timeItems: [
            { id: 1, heading: 'MOW – HKT', description: '10:45 – 08:00' },
            { id: 2, heading: 'В пути', description: '21ч 15м' },
            { id: 3, heading: '2 пересадки', description: 'HKG, JNB' },
          ],
        },
        {
          id: 2,
          timeItems: [
            { id: 1, heading: 'MOW – HKT', description: '11:20 – 00:50' },
            { id: 2, heading: 'В пути', description: '13ч 30м' },
            { id: 3, heading: '1 пересадка', description: 'HKG' },
          ],
        },
      ],
    },
    {
      id: 4,
      info: { price: '13 400 Р', logo: '' },
      infoItems: [
        {
          id: 1,
          timeItems: [
            { id: 1, heading: 'MOW – HKT', description: '10:45 – 08:00' },
            { id: 2, heading: 'В пути', description: '21ч 15м' },
            { id: 3, heading: '2 пересадки', description: 'HKG, JNB' },
          ],
        },
        {
          id: 2,
          timeItems: [
            { id: 1, heading: 'MOW – HKT', description: '11:20 – 00:50' },
            { id: 2, heading: 'В пути', description: '13ч 30м' },
            { id: 3, heading: '1 пересадка', description: 'HKG' },
          ],
        },
      ],
    },
    {
      id: 5,
      info: { price: '13 400 Р', logo: '' },
      infoItems: [
        {
          id: 1,
          timeItems: [
            { id: 1, heading: 'MOW – HKT', description: '10:45 – 08:00' },
            { id: 2, heading: 'В пути', description: '21ч 15м' },
            { id: 3, heading: '2 пересадки', description: 'HKG, JNB' },
          ],
        },
        {
          id: 2,
          timeItems: [
            { id: 1, heading: 'MOW – HKT', description: '11:20 – 00:50' },
            { id: 2, heading: 'В пути', description: '13ч 30м' },
            { id: 3, heading: '1 пересадка', description: 'HKG' },
          ],
        },
      ],
    },
  ];
  return (
    <div className={styles.ticket}>
      <div>
        <ul className={styles.ticket__list}>
          {cards.map((e) => (
            <li key={e.id}>
              <Card item={e} />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.ticket__down}>
        <div className={styles.ticket__more}>
          <Button parentClass={styles.ticket__button} />
        </div>
      </div>
    </div>
  );
}

export default Ticket;
