import React from 'react';

import CircularProgress from '@mui/material/CircularProgress';

import styles from './styles.module.css';

const Spinner = () => {
  return (
    <div className={styles.spinner_box}>
      <CircularProgress size={60} />
    </div>
  );
};

export { Spinner };
