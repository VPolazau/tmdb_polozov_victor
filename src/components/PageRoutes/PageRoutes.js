import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { ItemList } from '../ItemList';
import { Film } from '../Film'
import { Person } from '../Person'

const PageRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/films/page/1' />} />
      <Route path='/:films/page/:page' element={<ItemList />} />
      <Route path='/:people/page/:page' element={<ItemList />} />
      <Route path='/film/:id' element={<Film />} />
      <Route path='/person/:id' element={<Person />} />
    </Routes>
  );
};

export { PageRoutes };