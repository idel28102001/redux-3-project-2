import React from 'react';

import Radios from '../Radios';
import { IRadio } from '../Radio/Radio';
import { SortStatus } from '../../store/reducers/sort';

import styles from './Sort.module.scss';

function Sort() {
  const sorts: Array<IRadio> = [
    { id: 1, value: SortStatus.cheapest, label: 'Самый дешевый' },
    { id: 2, value: SortStatus.fastest, label: 'Самый быстрый' },
    { id: 3, value: SortStatus.optimal, label: 'Оптимальный' },
  ];
  return (
    <div className={styles.sort}>
      <Radios sorts={sorts} />
    </div>
  );
}

export default Sort;
