import React from 'react';

import './Ticket.scss';
import Button from '../Button';
import Card from '../Card';
import { ICard } from '../Card/Card';

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
    <div className="ticket">
      <div className="ticket__up">
        <ul className="ticket__list">
          {cards.map((e) => (
            <li key={e.id} className="ticket__item">
              <Card item={e} />
            </li>
          ))}
        </ul>
      </div>
      <div className="ticket__down">
        <div className="ticket__more">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Ticket;
