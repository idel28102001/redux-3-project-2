import React from 'react';

import styles from './Loader.module.scss';

function Loader() {
  return (
    <div className={styles.loader}>
      <span className={styles.loader__loader}></span>
    </div>
  );
}

export default Loader;
