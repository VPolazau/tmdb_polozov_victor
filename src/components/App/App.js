import React from 'react';

import { Header } from '../Header';
import { ItemList } from '../ItemList';

import styles from './styles.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <ItemList />
    </div>
  );
};

export { App };