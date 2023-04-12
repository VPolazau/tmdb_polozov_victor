import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import TextField from '@mui/material/TextField';

import { PositionedMenu } from '../PositionedMenu';
import logo from './logo.svg';
import { withTMDBService } from '../hocHelpers/withTMDBService';
import { updateSearchText } from '../../actions';

import styles from './styles.module.css';
import { useDebounce } from '../hooks/useDebounce';
import { useNavigate } from 'react-router-dom';

const Header = ({ type, updateSearchText }) => {
  const [text, setText] = useState('');
  const navigate = useNavigate()

  const debouncedText = useDebounce(text, 500);

  useEffect(() => {
    updateSearchText(debouncedText);
    if (type === 'films') {
      navigate('films/page/1')
    }
    if (type === 'people') {
      navigate('films/people/1')
    }
  }, [debouncedText]);

  const handleSearchChange = (e) => setText(e.target.value);

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
          onChange={handleSearchChange}
        />
        <PositionedMenu />
      </div>
    </div>
  );
};

const mapStateToProps = ({ type }) => ({ type });

const mapDispatchToProps = { updateSearchText };

const wrapped = withTMDBService()(connect(mapStateToProps, mapDispatchToProps)(Header));

export { wrapped as Header };
