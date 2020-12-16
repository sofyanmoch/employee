// import * as React from 'react';
import React, { Component } from 'react';
import { Link, Route, RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'primereact/button';

//prime react
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

//service
import EmployeeService from '../../service/employee/employee.service'

interface IState {
    employee: any[]
}

export default class Home extends React.Component<RouteComponentProps, IState> {
    employeeService: EmployeeService
    constructor(props:RouteComponentProps) {
        super(props)
        this.state = { employee: []}
        this.employeeService = new EmployeeService()
    }
    componentDidMount(): void{
        this.employeeService.getAllEmployee().then(data => this.setState({employee: data}))
    }
    render() {
        const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
        const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;
        const employee = this.state.employee
        return(
            // <div>
            //     <div className="card">
            //         <DataTable value={this.state.employee}>
            //             <Column field="fullName" header="Full Name"></Column>
            //             <Column field="department" header="Department"></Column>
            //             <Column field="gender" header="Gender"></Column>
            //             <Column field="age" header="Age"></Column>
            //         </DataTable>
            //     </div>
            // </div>
            <div>
                <div className="card">
                    <DataTable value={this.state.employee} paginator
                        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" 
                        rows={1} 
                        rowsPerPageOptions={[5,10,20]}
                        paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                        <Column field="fullName" header="Full Name"></Column>
                        <Column field="department" header="Department"></Column>
                     <Column field="gender" header="Gender"></Column>
                      <Column field="age" header="Age"></Column>
                      <Column field="phoneNumber" header="Phone"></Column>
                    </DataTable>
                </div>
            </div>
        //    <div>
               
        //        <div className="container">
        //            <div className="row">
        //            <button className="btn btn-primary"></button>
        //                <table className="table table-bordered">
        //                    <thead className="thead-light">
        //                        <tr>
        //                             <th scope="col">Full Name</th>
        //                             <th scope="col">Department</th>
        //                             <th scope="col">Gender</th>
        //                             <th scope="col">Age</th>
        //                             <th scope="col">Phone</th>
        //                        </tr>
        //                    </thead>
        //                    <tbody>
        //                        {employee && employee.map(employ => 
        //                         <tr key={employ.id}>
        //                                 <td>{employ.fullName}</td>
        //                                 <td>{employ.department}</td>
        //                                 <td>{employ.gender}</td>
        //                                 <td>{employ.age}</td>
        //                                 <td>{employ.phoneNumber}</td>
        //                                 {/* <td>
        //                                     <div className="d-flex justify-content-between align-items-center">
        //                                         <div className="btn-group" style={{ marginBottom: "20px" }}>
        //                                             <Link to={`edit/${employ.id}`} className="btn btn-sm btn-outline-secondary">Edit Customer </Link>
        //                                             <button className="btn btn-sm btn-outline-secondary">Delete Customer</button>
        //                                         </div>
        //                                     </div>
        //                                 </td> */}
        //                         </tr>
        //                         )}
                                
        //                    </tbody>
        //                    {employee.length === 0 &&(
        //            <div className="text-center">
        //                <h2>Employee Not Found</h2>
        //            </div>
        //        )}
        //                </table>
        //            </div>
        //        </div>
        //    </div>
    
        )
    }
}