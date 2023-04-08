import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { ToggleBtns } from '../ToogleBtns';
import { Item } from '../Item';
import { withTMDBService } from '../hocHelpers/withTMDBService';

import styles from './styles.module.css';

const ItemList = ({ tmdbService }) => {
  const [mas, setMas] = useState();

  useEffect(() => {
    // tmdbService.getFilms('top_rated', 1).then((res) => setMas(res.results));
    tmdbService.getPeople(1).then((res) => setMas(res.results));
  }, [tmdbService]);

  const [page, setPage] = useState(1);
  const handleChangePagination = (event, value) => setPage(value);
  
  return (
    <>
      <div className={styles.films}>
        <div className={styles.box}>
          <span className={styles.page_title}>
            {mas && mas[0].title ? 'Films' : (mas && mas[0].name ? 'People' : null)}
          </span>
          {mas && mas[0].title && (
            <div className={styles.films_filter}>
              <span className={styles.filter_span}>Filter by: </span>
              <ToggleBtns />
            </div>
          )}
        </div>
        <div className={styles.films_list_container}>
          {mas && mas.map((item) => <Item key={item.id} item={item} />)}
        </div>
      </div>
      {mas && (
        <Stack sx={{ mt: 5, mb: 10 }}>
          <Pagination
            count={1000}
            siblingCount={1}
            page={page}
            size='small'
            onChange={handleChangePagination}
            sx={{ marginLeft: 'auto', marginRight: '5%' }}
          />
        </Stack>
      )}
    </>
  );
};

const wrapped = withTMDBService()(ItemList);

export { wrapped as ItemList };
