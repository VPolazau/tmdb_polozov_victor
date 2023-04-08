import React from 'react';

import { Header } from '../Header';
import { FilmsList } from '../FilmsList';

import styles from './styles.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <FilmsList />
    </div>
  );
};

export { App };