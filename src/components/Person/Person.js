import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { withTMDBService } from '../hocHelpers/withTMDBService';

import styles from './styles.module.css';

const Person = ({ tmdbService }) => {
  const [itemPerson, setItemPerson] = useState();
  const params = useParams()

  useEffect(() => {
    tmdbService.getPerson(params.id).then(data => {
      setItemPerson(data)
    })
  }, [tmdbService, params]);

  if (!itemPerson) return;

  const {
    name,
    profile_path,
    biography,
    birthday,
    deathday,
    known_for_department,
    place_of_birth,
    also_known_as,
    gender,
  } = itemPerson;

  return (
    <div className={styles.person_container}>
      <div className={styles.picture_wrapper}>
        <div className={styles.picture}>
          <img
            className={styles.person_image}
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${profile_path}`}
            alt={name}
            srcSet={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${profile_path} 1x, https://image.tmdb.org/t/p/w600_and_h900_bestv2${profile_path} 2x`}
          />
        </div>
      </div>
      <div className={styles.person_info}>
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.biography}>
          <h3 className={styles.biography_tag}>Biography:</h3>
          <p>{biography}</p>
        </div>
        <div className={styles.facts}>
          <h3 className={styles.facts_tag}>Personal information:</h3>
          <div className={styles.info}>
            <div className={styles.info_elem}>
              <h4 className={styles.info_elem_tag}>Known for:</h4>
              <span className={styles.info_elem_body}>{known_for_department}</span>
            </div>
            <div className={styles.info_elem}>
              <h4 className={styles.info_elem_tag}>Gender:</h4>
              <span className={styles.info_elem_body}>{gender === 1 ? 'female' : 'male'}</span>
            </div>
            <div className={styles.info_elem}>
              <h4 className={styles.info_elem_tag}>Birthday:</h4>
              <span className={styles.info_elem_body}>{birthday.split('-').reverse().join('/')}</span>
            </div>
            <div className={styles.info_elem}>
              <h4 className={styles.info_elem_tag}>Place of birth:</h4>
              <span className={styles.info_elem_body}>{place_of_birth}</span>
            </div>
            {deathday && (
              <div className={styles.info_elem}>
                <h4 className={styles.info_elem_tag}>Deathday:</h4>
                <span className={styles.info_elem_body}>{deathday.split('-').reverse().join('/')}</span>
              </div>
            )}
            <div className={styles.info_elem}>
              <h4 className={styles.info_elem_tag}>Also known as:</h4>
              <div className={styles.also_known_as}>
                {also_known_as.map((i, idx) => (
                  <p key={idx}>{i}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const wrapped = withTMDBService()(Person);

export { wrapped as Person };
