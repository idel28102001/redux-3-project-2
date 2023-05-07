import React from 'react';

import styles from './Loader.module.scss';

function Loader() {
  return (
    <div className={styles.root}>
      <span className={styles.loader}></span>
    </div>
  );
}

export default Loader;
