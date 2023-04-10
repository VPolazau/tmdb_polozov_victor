import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ItemList } from '../ItemList';
import { Void } from '../Void';
// import { Film } from '../Film'
// import { Person } from '../Person'

const PageRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Void />} />
      <Route path={`/films/`} element={<ItemList filter='popular' page={1}/>} />
      <Route path={`/people/`} element={<ItemList filter='people' page={1}/>} />
    </Routes>
  );
};

export { PageRoutes };

{
  /*   
      <Person id={224513}/>
      <Film id={76600}/>
      <ItemList filter='people' page={10}/>
      <ItemList filter='top_rated' page={1}/>
      <ItemList filter='popular' page={1}/>
      <ItemList filter='now_playing' page={1}/> 
*/
}
