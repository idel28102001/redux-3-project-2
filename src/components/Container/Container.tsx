import React from 'react';

import styles from './Container.module.scss';

interface ContainerProps {
  children: JSX.Element | string;
}

function Container({ children }: ContainerProps) {
  return <div className={styles.container}>{children}</div>;
}

export default Container;
