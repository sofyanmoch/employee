import * as React from 'react'
import axios from 'axios'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { render } from 'react-dom'

export interface IValues {
    fullName: string,
    department: string,
    gender: string,
    age: number,
    phoneNumber: number
}

export interface IFormState {
    [key: string]: any;
    values: IValues[];
    submitSuccess: boolean;
    loading: boolean;
}

class Create extends React.Component<RouteComponentProps, IFormState> {
    constructor(props: RouteComponentProps) {
        super(props)
        this.state = {
           fullName: '',
           department: '',
           gender: '',
           age: '',
           phoneNumber: '',
           values: [],
            loading: false,
            submitSuccess: false,
        }
    }

    private processFormSubmission = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        this.setState({loading: true})
        const formData = {
            fullName: this.state.fullName,
            department: this.state.department,
            gender: this.state.gender,
            age: this.state.age,
            phoneNumber: this.state.phoneNumber
        }
        this.setState({submitSuccess: true, values:[...this.state.values, formData], loading: false})
        axios.post('http://localhost:3000/api/employee/add', formData).then(data => [
            setTimeout(()=> {
                this.props.history.push('/employee')
                console.log(data)
            }, 1500)
            
        ])
    }

    private handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    public render() {
        const {submitSuccess, loading} = this.state;
        return (
            <div>
                <div className={"col-md-12 form-wrapper"}>
                    <h2 className="text-center">Add Employee</h2>
                    {!submitSuccess && (
                        <div className="alert alert-info" role="alert">
                            Fill the form below to create employee
                        </div>
                    )}
                    {submitSuccess && (
                        <div className="alert alert-info" role="alert">
                            The for was succesfully submited
                        </div>
                    )}

                    <form id={"create-employee-form"} onSubmit={this.processFormSubmission} noValidate={true}>
                    <div className="form-group col-md-12">
                          <label htmlFor="fullName"> Full Name </label>
                          <input type="text" id="fullName" onChange={(e) => this.handleInputChanges(e)} name="fullName" className="form-control" placeholder="Enter Employee Name" />
                      </div>
                      <div className="form-group col-md-12">
                          <label htmlFor="department"> Department </label>
                          <input type="text" id="department" onChange={(e) => this.handleInputChanges(e)} name="department" className="form-control" placeholder="Enter Employee Department" />
                      </div>
                      <div className="form-group col-md-12">
                          <label htmlFor="gender"> Gender </label>
                          <input type="text" id="gender" onChange={(e) => this.handleInputChanges(e)} name="gender" className="form-control" placeholder="Enter Employee Gender " />
                      </div>
                      <div className="form-group col-md-12">
                          <label htmlFor="age"> Age </label>
                          <input type="number" id="age" onChange={(e) => this.handleInputChanges(e)} name="age" className="form-control" placeholder="Enter Employee Age" />
                      </div>
                      <div className="form-group col-md-12">
                          <label htmlFor="phoneNumber"> Phone Number </label>
                          <input type="number" id="phoneNumber" onChange={(e) => this.handleInputChanges(e)} name="phoneNumber" className="form-control" placeholder="Enter Phone Number" />
                      </div>
                      <div className="form-group col-md-4 pull-right">
                          <button className="btn btn-success" type="submit">
                              Create Employee
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

export default withRouter(Create)