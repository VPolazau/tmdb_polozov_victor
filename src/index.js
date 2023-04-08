import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './components';
import { ErrorBoundry } from './components';
import { TMDBService } from './service/TMDBService';
import { TMDBServiceProvider } from './components';

import store from './store';

import './styles.css';

const tmdbService = new TMDBService();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ErrorBoundry>
      <TMDBServiceProvider value={tmdbService}>
        <Router>
          <App />
        </Router>
      </TMDBServiceProvider>
    </ErrorBoundry>
  </Provider>
);
