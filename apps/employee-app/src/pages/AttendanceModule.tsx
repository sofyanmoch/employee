import React, {Component} from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import axios from 'axios'

//component
import HomeAttendance from '../components/attendance/HomeAttendance'

export default class AttendanceModule extends Component { 
    render(){
        return(
            <BrowserRouter>
            <main>
                <Switch>
                <Route path="/home" component={HomeAttendance} exact />
                </Switch>
            </main>
            </BrowserRouter>
        )
    }
}