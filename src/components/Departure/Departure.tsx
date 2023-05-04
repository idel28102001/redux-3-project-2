import React from 'react';
import classNames from 'classnames';

import Info from '../Info';
import { IInfo } from '../Info/Info';

import styles from './Departure.module.scss';

interface DepartureProps {
  infoItems: Array<IInfo>;
  parentClass?: string;
}

function Departure({ infoItems, parentClass }: DepartureProps) {
  return (
    <div className={classNames(styles.departure, parentClass)}>
      <ul className={styles.departure__list}>
        {infoItems.map((e) => (
          <li key={e.id}>
            <Info item={e} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Departure;
