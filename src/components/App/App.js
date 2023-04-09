import React, { useEffect, useState } from 'react';

import { Header } from '../Header';
import { ItemList } from '../ItemList';
// import { Film } from '../Film'
// import { Person } from '../Person'

import {TMDBService} from '../../service/TMDBService'
const tmdbService = new TMDBService()


const App = () => {
  const [item, setItem] = useState()

  useEffect(() => {
    // tmdbService.getPerson(224513).then(res => setItem(res))
    // tmdbService.getMovie(677179).then(res => setItem(res))
    // tmdbService.getMovie(76600).then(res => setItem(res))
    // tmdbService.getFilms('popular', 1).then((res) => console.log(res.results));
    // tmdbService.getPeople(1).then((res) => console.log(res.results));
  }, [])
  
  return (
    <>
      <Header />
      {/* {item && <Person item={item}/>} */}
      {/* {item && <Film item={item}/>} */}
      <ItemList />
    </>
  );
};

export { App };