import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ItemList } from '../ItemList';
// import { Void } from '../Void';
// import { Film } from '../Film'
// import { Person } from '../Person'

const PageRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<ItemList />} />
    </Routes>
  );
};

export { PageRoutes };

  
// Person 224513
// Film 76600

