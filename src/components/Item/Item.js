import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

import styles from './styles.module.css';
import no_image from './no_image.svg';

const Item = ({ item }) => {
  let { vote_average, title, release_date, poster_path, name, profile_path } = item;

  if(vote_average === 0) vote_average = undefined
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <div className={styles.wrapper}>
          <a className={styles.link_img} href='#top'>
            <img
              loading='lazy'
              className={styles.poster}
              src={
                !poster_path && !profile_path
                  ? no_image
                  : `https://image.tmdb.org/t/p/w220_and_h330_face${poster_path || profile_path}`
              }
              srcSet={
                !poster_path && !profile_path
                  ? no_image
                  : `https://image.tmdb.org/t/p/w220_and_h330_face${
                      poster_path || profile_path || no_image
                    } 1x, https://image.tmdb.org/t/p/w440_and_h660_face${poster_path || profile_path || no_image} 2x`
              }
              alt={title || name || undefined}
            />
          </a>
        </div>
      </div>
      <div className={styles.content}>
        {vote_average && (
          <Box sx={{ display: 'flex' }}>
            <Rating name='size-small' value={vote_average / 2} precision={0.1} size='small' readOnly />
            <Typography
              variant='caption'
              sx={{ color: 'gray', userSelect: 'none' }}
            >{`\xa0${vote_average}`}</Typography>
          </Box>
        )}
        <h2 className={styles.content_title}>
          <a href='#flor' title={title || name}>
            {title || name || undefined}
          </a>
        </h2>
        {release_date && <p className={styles.content_date}>{release_date.split('-').reverse().join('/')}</p>}
      </div>
    </div>
  );
};

export { Item };
