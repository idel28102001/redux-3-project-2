import React from 'react';

import Checkboxes from '../Checkboxes';
import { useTypedSelect } from '../../hooks/useTypedSelect';

import styles from './Filter.module.scss';

function Filter() {
  const { filters } = useTypedSelect((state) => state.filter);
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h3 className={styles.heading}>Количество пересадок</h3>
      </div>
      <div>
        <Checkboxes filters={filters} parentClass={styles.checkboxes} />
      </div>
    </div>
  );
}

export default Filter;
