import React, { useEffect, useState } from 'react';

import { Header } from '../Header';
// import { ItemList } from '../ItemList';
import { Film } from '../Film'
// import { Person } from '../Person'


const App = () => {
  
  return (
    <>
      <Header />
      {/* {<Person id={224513}/>} */}
      {<Film id={76600}/>}
      {/* <ItemList /> */}
    </>
  );
};

export { App };