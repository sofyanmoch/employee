// import React from 'react';
import React, { Component } from 'react';
import { render } from 'react-dom';

// import styles from './app.module.scss';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import Home from '../components/employee/Home'
import Create from '../components/employee/Create'
import { Route, Link } from 'react-router-dom';

export function App() {
  return (
    <div>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      <Route
        path="/employee"
        exact
       component={Home}
      />
      <Route
        path="/employee/add"
        exact
       component={Create}
      />
      {/* END: routes */}
    </div>
  );
}

export default App;
