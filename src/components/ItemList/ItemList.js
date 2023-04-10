import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux'

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { ToggleBtns } from '../ToogleBtns';
import { Item } from '../Item';
import { updateListObj } from '../../actions';
import { withTMDBService } from '../hocHelpers/withTMDBService';

import styles from './styles.module.css';


const ItemList = ({ filter, listObj, type, updateListObj, tmdbService }) => {
  const [response, setResponse] = useState(listObj);
  const [pageNum, setPageNum] = useState(1);
  const [filterFilms, setfilterFilms] = useState(filter)

  const { results, page, total_pages } = response;

  const state = useSelector(state => state)
  console.log(state)

  useEffect(() => {
    setfilterFilms(filter)
    setResponse(listObj)
    if(page) setPageNum(page)
  }, [page, filter, listObj]);

  
  const handleChangePagination = (event, value) => {
    if(type === 'Films') {
      tmdbService.getFilms(filterFilms, value).then(data => {
        updateListObj(data)
      })
    }
    if (type === 'People'){
      tmdbService.getPeople(value).then(data => {
        updateListObj(data)
      })
    }
    setPageNum(value);
  }

  if (!results) return

  return (
    <>
      <div className={styles.films}>
        <div className={styles.box}>
          <span className={styles.page_title}>{results[0].title ? 'Films' : 'People'}</span>
          {results[0].title && (
            <div className={styles.films_filter}>
              <span className={styles.filter_span}>Filter by: </span>
              <ToggleBtns filter={filterFilms}/>
            </div>
          )}
        </div>
        <div className={styles.films_list_container}>
          {results.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </div>
      <Stack sx={{ mt: 5, mb: 10 }}>
        <Pagination
          count={total_pages < 500 ? total_pages : 500}
          siblingCount={1}
          page={pageNum}
          size='small'
          onChange={handleChangePagination}
          sx={{ marginLeft: 'auto', marginRight: '5%' }}
        />
      </Stack>
    </>
  );
};

const mapStateToProps = ({ listObj, page, filter, type }) => ({ listObj, page, filter, type })

const mapDispatchToProps = { updateListObj };

const wrapped = withTMDBService()(connect(mapStateToProps, mapDispatchToProps)(ItemList));

export { wrapped as ItemList };