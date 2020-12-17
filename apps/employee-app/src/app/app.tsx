// import React from 'react';
import React, { Component } from 'react';
import { render } from 'react-dom';

//component
import Home from '../components/employee/Home'
import Create from '../components/employee/Create'

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import EditEmployee from '../components/employee/edit';

export default class App extends Component {
  render() {
    return(
      <BrowserRouter>
      <main>
        <Switch>
          <Route path="/employee" component={Home} exact />
          <Route path="/employee/add" component={Create} exact />
          <Route path={'/employee/edit/:id'} exact component={EditEmployee} />
        </Switch>
      </main>
      </BrowserRouter>
    )
  }
}
