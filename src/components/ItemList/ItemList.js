import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { ToggleBtns } from '../ToogleBtns';
import { Item } from '../Item';
import { updateListObj, updateType, loadingOn } from '../../actions';
import { withTMDBService } from '../hocHelpers/withTMDBService';
import { Spinner } from '../Spinner';

import styles from './styles.module.css';

const ItemList = ({
  filter,
  listObj,
  type,
  searchText,
  updateListObj,
  tmdbService,
  updateType,
  isLoading,
  loadingOn,
}) => {
  const [response, setResponse] = useState(listObj);
  const [filterFilms, setfilterFilms] = useState(filter);
  const navigate = useNavigate();

  const params = useParams();
  const pageNum = +params.page;

  const { results, total_pages } = response;

  useEffect(() => {
    setResponse(listObj);
  }, [listObj])

  useEffect(() => {
    if (type !== params?.films || params?.people) {
      updateType(params?.films || params?.people);
    }
  }, [params, updateType, type]);

  useEffect(() => {
    loadingOn();
    if (type === 'films' && searchText.length > 0) {
      tmdbService.searchItem('movie', searchText, pageNum).then((data) => {
        setTimeout(() => {
          updateListObj(data)
        }, 600)
      });
    }
    if (type === 'people' && searchText.length > 0) {
      tmdbService.searchItem('person', searchText, pageNum).then((data) => {
        setTimeout(() => {
          updateListObj(data)
        }, 600)
      });
    }
    if (type === 'films' && searchText === '') {
      tmdbService.getFilms(filter, pageNum).then((data) => {
        setTimeout(() => {
          updateListObj(data)
        }, 600)
      });
    }
    if (type === 'people' && searchText === '') {
      tmdbService.getPeople(pageNum).then((data) => {
        setTimeout(() => {
          updateListObj(data)
        }, 600)
      });
    }
    setfilterFilms(filter);
  }, [filter, type, tmdbService, updateListObj, loadingOn, pageNum, searchText]);

  const handleChangePagination = (event, value) => {
    window.scrollTo(0, 0);
    navigate(`/${type}/page/${value}`);
  };

  if (!results) return;

  if (isLoading) return <Spinner />;

  return (
    <>
      <div className={styles.films}>
        <div className={styles.box}>
          <span className={styles.page_title}>
            {(params?.films || params?.people) === 'films' ? 'Films' : 'People'}
          </span>
          {type === 'films' && (
            <div className={styles.films_filter}>
              <span className={styles.filter_span}>Filter by: </span>
              <ToggleBtns filter={filterFilms} />
            </div>
          )}
        </div>
        {results.length === 0 && <div className={styles.void}>Not found</div>}
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
          page={+pageNum}
          size='small'
          onChange={handleChangePagination}
          sx={{ marginLeft: 'auto', marginRight: '5%' }}
        />
      </Stack>
    </>
  );
};

const mapStateToProps = ({ listObj, page, filter, type, searchText, isLoading }) => ({
  listObj,
  page,
  filter,
  type,
  searchText,
  isLoading,
});

const mapDispatchToProps = { updateListObj, updateType, loadingOn };

const wrapped = withTMDBService()(connect(mapStateToProps, mapDispatchToProps)(ItemList));

export { wrapped as ItemList };
