import classNames from 'classnames';
import React from 'react';

import Time from '../Time';
import { ITime } from '../Time/Time';

import styles from './Info.module.scss';

export interface IInfo {
  id: number;
  timeItems: Array<ITime>;
}

interface InfoProps {
  item: IInfo;
  parentClass?: string;
}

function Info({ item: { timeItems }, parentClass }: InfoProps) {
  return (
    <div className={classNames(styles.info, parentClass)}>
      <ul className={styles.info__list}>
        {timeItems.map((e) => (
          <li key={e.id} className={styles.info__item}>
            <Time item={e} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Info;
