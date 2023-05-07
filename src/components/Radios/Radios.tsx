import classNames from 'classnames';
import React from 'react';

import Radio from '../Radio';
import { IRadio } from '../Radio/Radio';

import styles from './Radios.module.scss';

interface RadiosProps {
  sorts: Array<IRadio>;
  parentClass?: string;
}

function Radios({ sorts, parentClass }: RadiosProps) {
  return (
    <ul className={classNames(styles.root, parentClass)}>
      {sorts.map((e) => (
        <li key={e.id} className={styles.item}>
          <Radio sort={e} />
        </li>
      ))}
    </ul>
  );
}

export default Radios;
