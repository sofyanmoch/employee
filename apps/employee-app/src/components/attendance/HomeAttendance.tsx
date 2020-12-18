import React, { Component } from 'react'
import { Link, Route, RouteComponentProps } from 'react-router-dom'
import axios from 'axios'

// primereact
import {DataTable } from 'primereact/datatable'
import {Column} from 'primereact/column'
import {Toast} from 'primereact/toast'
import {Button} from 'primereact/button'

//service
import AttendanceService from '../../service/attendance/attendance.service'

interface IState {
    attendance: any[]
}

export default class HomeAttendance extends React.Component<RouteComponentProps, IState> {

    attendanceService: AttendanceService
    toast: Toast

    constructor(props:RouteComponentProps){
        super(props)
        this.state = {
            attendance: []
        }
        this.attendanceService = new AttendanceService()

        // bind
        this.actionBodyTemplate = this.actionBodyTemplate.bind(this)
        this.deleteAttendance = this.deleteAttendance.bind(this)

    }

    componentDidMount(): void{
        this.attendanceService.getAllAttendance().then(data => this.setState({attendance: data}))
    }

    deleteAttendance(rowData) {
        axios.delete(`http://localhost:3000/api/attendance/delete/${rowData}`).then( data => {
            window.location.reload(false)
        })
        this.toast.show({ severity: 'success', summary: 'Successful', detail: 'Attendance Deleted', life: 3000 });
    }

    actionBodyTemplate(rowData) {
        return (
            
            <React.Fragment>
                <div className="">
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-3" onClick={() => alert(rowData._id)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => this.deleteAttendance(rowData._id)} />
                </div>
            </React.Fragment>
        );
    }

    render(){
        return(
            <div>
                <Toast ref={(el) => this.toast = el} />
                <div className="card">
                    <DataTable value={this.state.attendance} paginator
                        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" 
                        rows={5} 
                        rowsPerPageOptions={[5,10,20]}>
                        <Column field="employeeName" header="Employee"></Column>
                        <Column field="present" header="Present"></Column>
                     <Column field="sick" header="Sick"></Column>
                      <Column field="alpha" header="Alpha"></Column>
                      <Column field="permissions" header="Permission"></Column>
                      <Column header="Action" body={this.actionBodyTemplate}></Column>
                    </DataTable>
                </div>
            </div>
        )
    }
}