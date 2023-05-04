import React from 'react';

import './Radios.scss';
import Radio from '../Radio';
import { IRadio } from '../Radio/Radio';

interface RadiosProps {
  sorts: Array<IRadio>;
}

function Radios({ sorts }: RadiosProps) {
  return (
    <ul className="sort__list radios">
      {sorts.map((e) => (
        <li key={e.id} className="radios__item">
          <Radio sort={e} />
        </li>
      ))}
    </ul>
  );
}

export default Radios;
