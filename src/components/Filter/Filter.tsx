import React from 'react';

import Checkboxes from '../Checkboxes';
import { useTypedSelect } from '../../hooks/useTypedSelect';

import styles from './Filter.module.scss';

function Filter() {
  const { filters } = useTypedSelect((state) => state.filter);
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
