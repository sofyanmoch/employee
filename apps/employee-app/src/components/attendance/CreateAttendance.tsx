import * as React from 'react'
import axios from 'axios'
import {Toast} from 'primereact/toast'
import { RouteComponentProps, withRouter } from 'react-router-dom'

export interface IValues {
    employeeName: string,
    present: number,
    sick: number,
    alpha: number,
    permissions: number
}

export interface IFormState {
    [key: string]: any;
    values: IValues[]
    submitSuccess: boolean;
    loading: boolean;
}

class CreateAttendance extends React.Component<RouteComponentProps, IFormState>{
    toast: Toast;
    constructor(props: RouteComponentProps) {
        super(props)
        this.state = {
            employeeName: '',
            present: '',
            sick: '',
            alpha: '',
            permissions: '',
            values: [],
            loading: false,
            submitSuccess: false,
        }
    }

    private processFormSubmission = (e:React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        this.setState({loading: true})
        const formData = {
            employeeName: this.state.employeeName,
            present: this.state.present,
            sick: this.state.sick,
            alpha: this.state.alpha,
            permissions: this.state.permissions
        }
        this.setState({submitSuccess: true, values: [...this.state.values, formData], loading: false})
        axios.post('http://localhost:3000/api/attendance/add', formData).then(data => [
            setTimeout(() => {
                this.props.history.push('/attendance')

            }, 1500)
        ])
        this.toast.show({ severity: 'success', summary: 'Successful', detail: 'Success Add Employee', life: 3000 });
    }

    private handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    public render() {
        const {submitSuccess, loading} = this.state
        return(
            <div>
                <Toast ref={(el) => this.toast = el} />
                <div className={"col-md-12 form-wrapper"}>
                    <h2 className="text-center">Add Employee</h2>
                    {!submitSuccess && (
                        <div className="alert alert-info" role="alert">
                            Fill the form below to create employee
                        </div>
                    )}
                    {submitSuccess && (
                        <Toast ref={(el) => this.toast = el} />
                    )}

                    <form id={"create-employee-form"} onSubmit={this.processFormSubmission} noValidate={true}>
                    <div className="form-group col-md-12">
                          <label htmlFor="employeeName"> Full Name </label>
                          <input type="text" id="employeeName" onChange={(e) => this.handleInputChanges(e)} name="employeeName" className="form-control" placeholder="Enter Employee Name" />
                      </div>
                      <div className="form-group col-md-12">
                          <label htmlFor="present"> Present </label>
                          <input type="number" id="present" onChange={(e) => this.handleInputChanges(e)} name="present" className="form-control" placeholder="Enter Employee present" />
                      </div>
                      <div className="form-group col-md-12">
                          <label htmlFor="sick"> Sick </label>
                          <input type="number" id="sick" onChange={(e) => this.handleInputChanges(e)} name="sick" className="form-control" placeholder="Enter Employee sick " />
                      </div>
                      <div className="form-group col-md-12">
                          <label htmlFor="alpha"> Alpha </label>
                          <input type="number" id="alpha" onChange={(e) => this.handleInputChanges(e)} name="alpha" className="form-control" placeholder="Enter Employee alpha" />
                      </div>
                      <div className="form-group col-md-12">
                          <label htmlFor="permissions"> Phone Number </label>
                          <input type="number" id="permissions" onChange={(e) => this.handleInputChanges(e)} name="permissions" className="form-control" placeholder="Enter permissions" />
                      </div>
                      <div className="form-group col-md-12 ">
                          <button className="btn btn-success" type="submit">
                              Create Attendance
                          </button>
                          {loading &&
                              <span className="fa fa-circle-o-notch fa-spin" />
                          }
                      </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(CreateAttendance)