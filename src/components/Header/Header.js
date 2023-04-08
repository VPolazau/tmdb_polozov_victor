import React from 'react';
import TextField from '@mui/material/TextField';

import { PositionedMenu } from '../PositionedMenu';

import styles from './styles.module.css';
import logo from './logo.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_logo}>
        <img src={logo} alt='logo' />
      </div>
      <div className={styles.header_box}>
        <TextField
          id='outlined-basic'
          label='Search'
          variant='outlined'
          size='small'
          sx={{ display: 'flex', alignItems: 'center' }}
        />
        <PositionedMenu />
      </div>
    </div>
  );
};

export { Header };