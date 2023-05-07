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
    <div className={classNames(styles.root, parentClass)}>
      <div className={styles.list}>
        {infoItems.map((e) => (
          <div key={e.id}>
            <Info item={e} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Departure;
