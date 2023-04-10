import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { ToggleBtns } from '../ToogleBtns';
import { Item } from '../Item';

import styles from './styles.module.css';

const ItemList = ({ filter, page, listObj }) => {
  const [response, setResponse] = useState(listObj);
  const [pageNum, setPageNum] = useState(page);

  useEffect(() => {
    // if (filter === 'people') {
    //   tmdbService.getPeople(page).then((res) => setResponse(res));
    // } else {
    //   tmdbService.getFilms(filter, page).then((res) => setResponse(res));
    // }
    setResponse(listObj)
    setPageNum(page)
  }, [page, filter, listObj]);

  
  const handleChangePagination = (event, value) => setPageNum(value);

  if (!response) return;

  const { results, total_pages } = response;
  return (
    <>
      <div className={styles.films}>
        <div className={styles.box}>
          <span className={styles.page_title}>{results[0].title ? 'Films' : 'People'}</span>
          {results[0].title && (
            <div className={styles.films_filter}>
              <span className={styles.filter_span}>Filter by: </span>
              <ToggleBtns filter={filter}/>
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

const mapStateToProps = ({ listObj, page, filter }) => ({ listObj, page, filter })

const wrapped = connect(mapStateToProps)(ItemList);

export { wrapped as ItemList };
