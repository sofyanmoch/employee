// import React from 'react';
import React, { Component } from 'react';
import { render } from 'react-dom';

//component employee
import Home from '../components/employee/Home'
import Create from '../components/employee/Create'
import Navbar from '../components/shared/data-table/Navbar'

// attendance component
import HomeAttendance from '../components/attendance/HomeAttendance'
import CreateAttendance from '../components/attendance/CreateAttendance'

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
      <Navbar/>
        <Switch>
          {/* employee */}
          <Route path="/employee" component={Home} exact />
          <Route path="/employee/add" component={Create} exact />
          <Route path={'/employee/edit/:id'} exact component={EditEmployee} />
        
          {/* attendance */}
          <Route path="/attendance" component={HomeAttendance} exact />
          <Route path="/attendance/add" component={CreateAttendance} exact />

        </Switch>
      </main>
      </BrowserRouter>
    )
  }
}
