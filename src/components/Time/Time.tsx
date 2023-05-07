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
    <div className={classNames(styles.root, parentClass)}>
      <header className={styles.heading}>{heading}</header>
      <span className={styles.description}>{description}</span>
    </div>
  );
}

export default Time;
