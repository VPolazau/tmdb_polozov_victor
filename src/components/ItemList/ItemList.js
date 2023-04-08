import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { ToggleBtns } from '../ToogleBtns';
import { TMDBService } from '../../service/TMDBService';

import styles from './styles.module.css';
import { Item } from '../Item';

const ItemList = () => {
  const [mas, setMas] = useState();

  const tmdbService = new TMDBService();

  useEffect(() => {
    // tmdbService.getFilms('top_rated', 1).then((res) => setMas(res.results));
    tmdbService.getPeople(1).then((res) => setMas(res.results));
  }, []);

  const [page, setPage] = useState(1);
  const handleChangePagination = (event, value) => setPage(value);

  console.log(mas)

  return (
    <>
      <div className={styles.films}>
        <div className={styles.box}>
          <span className={styles.page_title}>{mas && mas[0].title ? 'Films' : 'People'}</span>
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

export { ItemList };
