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
    <div className={classNames(styles.root, parentClass)}>
      <div className={styles.list}>
        {timeItems.map((e) => (
          <div key={e.id} className={styles.item}>
            <Time item={e} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Info;
