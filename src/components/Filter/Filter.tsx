import React from 'react';

import Checkboxes from '../Checkboxes';
import { ICheckBox } from '../Checkbox/Checkbox';

import styles from './Filter.module.scss';

function Filter() {
  const filters: Array<ICheckBox> = [
    { id: 1, label: 'Всё', checked: false },
    {
      id: 2,
      label: 'Без пересадок',
      checked: false,
    },
    { id: 3, label: '1 пересадка', checked: false },
    { id: 4, label: '2 пересадки', checked: false },
    {
      id: 5,
      label: '3 пересадки',
      checked: false,
    },
  ];
  return (
    <div className={styles.filter}>
      <div className={styles.filter__header}>
        <h3 className={styles.filter__heading}>Количество пересадок</h3>
      </div>
      <div>
        <Checkboxes filters={filters} parentClass={styles.filter__checkboxes} />
      </div>
    </div>
  );
}

export default Filter;
