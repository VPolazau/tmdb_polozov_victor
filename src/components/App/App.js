import React, { useState } from 'react';

import { TMDBServiceProvider } from '../ServiceContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundry } from '../ErrorBoundary/ErrorBoundary';
import { TMDBService } from '../../service/TMDBService';

import styles from './styles.module.css';
import { Header } from '../Header';

const App = () => {
//   const [tmdbService, setTmdbService] = useState(new TMDBService());
const tmdbService = new TMDBService()

  return (
    <ErrorBoundry>
      <TMDBServiceProvider value={tmdbService}>
        <BrowserRouter>
          <div className={styles.container}>
            <Header />
            <Routes>
              <Route path='/' element={<h1>Hello World!</h1>} />
            </Routes>
          </div>
        </BrowserRouter>
      </TMDBServiceProvider>
    </ErrorBoundry>
  );
};

export { App };
