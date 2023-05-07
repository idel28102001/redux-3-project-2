import React from 'react';

import Header from '../Header';
import Main from '../Main';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.root}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
