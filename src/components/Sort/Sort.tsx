import React from 'react';

import Radios from '../Radios';
import { IRadio } from '../Radio/Radio';

import styles from './Sort.module.scss';

function Sort() {
  const sorts: Array<IRadio> = [
    { id: 1, value: 'cheapest', checked: true, label: 'Самый дешевый' },
    { id: 2, value: 'fastest', checked: false, label: 'Самый быстрый' },
    { id: 3, value: 'optimal', checked: false, label: 'Оптимальный' },
  ];
  return (
    <div className={styles.sort}>
      <Radios sorts={sorts} />
    </div>
  );
}

export default Sort;
