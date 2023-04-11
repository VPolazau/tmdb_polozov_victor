import React from 'react';

import styles from './styles.module.css';

const ErrorIndicator = () => {
  return (
    <div className={styles.error_container}>
      <h1>Sorry, something went wrong.</h1>
      <br />
      <span>We are already trying to solve this problem.</span>
    </div>
  );
};

export { ErrorIndicator };
