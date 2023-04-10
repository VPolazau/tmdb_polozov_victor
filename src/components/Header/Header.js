import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import TextField from '@mui/material/TextField';

import { PositionedMenu } from '../PositionedMenu';
import logo from './logo.svg';
import { withTMDBService } from '../hocHelpers/withTMDBService';
import { updateListObj, updateFilter, updateSearchText } from '../../actions';

import styles from './styles.module.css';
import { useDebounce } from '../hooks/useDebounce';

const Header = ({ type, tmdbService, updateListObj, updateFilter, updateSearchText }) => {

  const [text, setText] = useState('')

  const debouncedText = useDebounce(text, 500)

  useEffect(() => {
    if (type === 'Films' && !debouncedText) {
      tmdbService.getFilms('popular', 1).then((data) => {
        updateListObj(data);
        updateFilter('popular');
      });
      return;
    }
    if (type === 'People' && !debouncedText) {
      tmdbService.getPeople(1).then((data) => {
        updateListObj(data);
      });
      return;
    }
    if (type === 'Films') {
      tmdbService.searchItem('movie', debouncedText).then((data) => {
        updateListObj(data);
        updateFilter('');
        updateSearchText(debouncedText);
      });
    }
    if (type === 'People') {
      tmdbService.searchItem('person', debouncedText).then((data) => {
        updateListObj(data);
        updateFilter('');
        updateSearchText(debouncedText);
      });
    }
  }, [debouncedText])
  
  const handleSearchChange = (e) => setText(e.target.value)

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

const mapDispatchToProps = { updateListObj, updateFilter, updateSearchText };

const wrapped = withTMDBService()(connect(mapStateToProps, mapDispatchToProps)(Header));

export { wrapped as Header };
