import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

import { withTMDBService } from '../hocHelpers/withTMDBService';

import styles from './styles.module.css';

const Film = ({ tmdbService }) => {
  const [itemFilm, setItemFilm] = useState()
  const params = useParams()

  useEffect(() => {
    tmdbService.getMovie(params.id).then(data => {
      setItemFilm(data)
    })
  }, [tmdbService, params])

  if(!itemFilm) return 

  const {
    title,
    vote_average,
    genres,
    poster_path,
    release_date,
    runtime,
    overview,
    backdrop_path,
    production_countries,
    status,
  } = itemFilm;

  const infoView = (mas) =>{
    return mas.map((i, idx) => {
      if (!idx) return <span key={i?.id || idx}>{i.name}</span>;
      return <span key={i?.id || idx}>, {i.name}</span>;
    });}

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={styles.film_container}>
        <div className={styles.poster_wrapper}>
          <div className={styles.poster}>
            <img
              className={styles.film_image}
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`}
              alt={title}
              srcSet={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path} 1x, https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path} 2x`}
            />
          </div>
        </div>
        <div className={styles.film_info}>
          <h2 className={styles.title}>
            {title}
            <span className={styles.tag}>{` (${release_date.slice(0, 4)})`}</span>
          </h2>
          <div className={styles.facts}>
            <span className={styles.release}>{release_date.split('-').reverse().join('/')}</span>
            <span>{'\xa0 • \xa0'}</span>
            <span className={styles.genres}>{infoView(genres)}</span>
            <span>{'\xa0 • \xa0'}</span>
            <span className={styles.runtime}>{runtime}m</span>
          </div>
          <span className={styles.countries}>
            <span className={styles.status_tag}>Countries: </span>
            {infoView(production_countries)}
          </span>
          <span className={styles.status}>
            <span className={styles.status_tag}>Status: </span>
            {status}
          </span>
          <Box sx={{ display: 'flex' }}>
            <Rating name='size-small' value={vote_average / 2} precision={0.1} size='large' readOnly/>
            <Typography
              variant='caption'
              sx={{ pt: '3px', fontSize: '16px', opacity: 0.8, userSelect: 'none' }}
            >{`\xa0${vote_average}`}</Typography>
          </Box>
          <div className={styles.info_body}>
            <h3>Overview</h3>
            <div>
              <p>{overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const wrapped = withTMDBService()(Film)

export { wrapped as Film };
