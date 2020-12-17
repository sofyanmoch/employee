// import * as React from 'react';
import React, { Component } from 'react';
import { Link, Route, RouteComponentProps } from 'react-router-dom';
import axios from 'axios';


//prime react
import classNames from 'classnames';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
// import './DataTableDemo.css';

//service
import EmployeeService from '../../service/employee/employee.service'

interface IState {
    employee: any[],
    employeeDialog: boolean
}

export default class Home extends React.Component<RouteComponentProps, IState> {

    newEmployee = {
        fullName: '',
        department: '',
        gender: "",
        age: 0,
        phoneNumber: 0
    };

    employeeService: EmployeeService
    toast: Toast;
    constructor(props:RouteComponentProps) {
        super(props)
        this.state = { 
            employee: [],
            employeeDialog: false,
        }
        this.employeeService = new EmployeeService()
        // this.deleteEmployee = this.deleteEmployee.bind(this);
        // this.confirmDeleteEmployee = this.confirmDeleteEmployee.bind(this);
        // this.editEmployee = this.editEmployee.bind(this);
        this.actionBodyTemplate = this.actionBodyTemplate.bind(this);
    }
    componentDidMount(): void{
        this.employeeService.getAllEmployee().then(data => this.setState({employee: data}))
    }

    deleteEmployee(rowData) {
        axios.delete(`http://localhost:3000/api/employee/delete/${rowData}`).then( data => {
            window.location.reload(false);
        })
        this.toast.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    }
    actionBodyTemplate(rowData) {
        return (
            
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => alert(rowData._id)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => this.deleteEmployee(rowData._id)} />
            </React.Fragment>
        );
    }
    render() {
        const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
        const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;
        const employee = this.state.employee
        return(
            // 
            <div>
                <Toast ref={(el) => this.toast = el} />
                <div className="card">
                    <DataTable value={this.state.employee} paginator
                        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" 
                        rows={5} 
                        rowsPerPageOptions={[5,10,20]}
                        paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                        <Column field="fullName" header="Full Name"></Column>
                        <Column field="department" header="Department"></Column>
                     <Column field="gender" header="Gender"></Column>
                      <Column field="age" header="Age"></Column>
                      <Column field="phoneNumber" header="Phone"></Column>
                     <Column header="Action" body={this.actionBodyTemplate}></Column>
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
        //                             <th scope="col" className="text-center">Action</th>
        //                        </tr>
        //                    </thead>
        //                    <tbody>
        //                        {employee && employee.map(employ => 
        //                         <tr key={employ._id}>
        //                                 <td>{employ.fullName}</td>
        //                                 <td>{employ.department}</td>
        //                                 <td>{employ.gender}</td>
        //                                 <td>{employ.age}</td>
        //                                 <td>{employ.phoneNumber}</td>
        //                                 <td>
        //                                     <div className="d-flex justify-content-between align-items-center">
        //                                         <div className="btn-group" style={{ marginBottom: "20px" }}>
        //                                             <Link to={`employee/edit/${employ._id}`} className="btn btn-sm btn-outline-secondary" onClick={() => alert(employ._id)}>Edit Customer </Link>
        //                                             <button className="btn btn-sm btn-outline-secondary">Delete Customer</button>
        //                                         </div>
        //                                     </div>
        //                                 </td>
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