import React from 'react';

import './Departure.scss';
import Info from '../Info';
import { IInfo } from '../Info/Info';

interface DepartureProps {
  infoItems: Array<IInfo>;
}

function Departure({ infoItems }: DepartureProps) {
  return (
    <div className="card__departure departure">
      <ul className="departure__list">
        {infoItems.map((e) => (
          <li key={e.id} className="departure__item">
            <Info item={e} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Departure;
