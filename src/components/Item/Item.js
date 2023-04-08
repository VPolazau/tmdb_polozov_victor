import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

import styles from './styles.module.css';

const Item = ({ item }) => {
  const { vote_average, title, release_date, poster_path } = item;

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <div className={styles.wrapper}>
          <a className={styles.link_img} href='#top'>
            <img
              loading='lazy'
              className={styles.poster}
              src={`https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`}
              srcSet={`https://image.tmdb.org/t/p/w220_and_h330_face${poster_path} 1x, https://image.tmdb.org/t/p/w440_and_h660_face${poster_path} 2x`}
              alt={title}
            />
          </a>
        </div>
      </div>
      <div className={styles.content}>
        <Box sx={{ display: 'flex' }}>
          <Rating name='size-small' value={vote_average / 2} precision={0.1} size='small' readOnly />
          <Typography variant='caption' sx={{ color: 'gray', userSelect: 'none' }}>{`\xa0${vote_average}`}</Typography>
        </Box>
        <h2 className={styles.content_title}>
          <a href='#flor' title={title}>
            {title}
          </a>
        </h2>
        <p className={styles.content_date}>{release_date}</p>
      </div>
    </div>
  );
};

export { Item };
