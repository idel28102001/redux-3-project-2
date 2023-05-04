import classNames from 'classnames';
import React from 'react';

import styles from './Time.module.scss';

export interface ITime {
  id: number;
  heading: string;
  description: string;
}

interface TimeProps {
  item: ITime;
  parentClass?: string;
}

function Time({ item: { heading, description }, parentClass }: TimeProps) {
  return (
    <div className={classNames(styles.time, parentClass)}>
      <h4 className={styles.time__heading}>{heading}</h4>
      <p className={styles.time__description}>{description}</p>
    </div>
  );
}

export default Time;
