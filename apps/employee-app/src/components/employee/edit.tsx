import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import axios from 'axios';

export interface IValues {
    [key: string]: any;
}
export interface IFormState {
    id: number,
    employee: any;
    values: IValues[];
    submitSuccess: boolean;
    loading: boolean;
}

class EditEmployee extends React.Component<RouteComponentProps<any>, IFormState> {
    constructor(props: RouteComponentProps) {
        super(props)
        this.state = {
            id: this.props.match.params._id,
            employee: {},
            values: [],
            loading: false,
            submitSuccess: false
        }
    }

    public componentDidMount(): void{
        
        axios.get(`http://localhost:3000/api/employee/${this.state}`).then(data => {
            console.log(data)
            this.setState({ employee : data})
        })
    }

    private processFormSubmission = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        this.setState({ loading: true });
        axios.patch(`http://localhost:3000/api/employee/${this.state.id}`, this.state.values).then(data => {
            this.setState({ submitSuccess: true, loading: false })
            setTimeout(() => {
                this.props.history.push('/');
            }, 1500)
        })
    }

    private setValues = (values: IValues) => {
        this.setState({ values: { ...this.state.values, ...values } });
    }
    private handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        this.setValues({ [e.currentTarget.id]: e.currentTarget.value })
    }

    public render() {
        const { submitSuccess, loading } = this.state;
        return (
            <div className="App">
                {this.state.employee &&
                    <div>
                        < h1 > Customer List Management App</h1>
                        <p> Built with React.js and TypeScript </p>

                        <div>
                            <div className={"col-md-12 form-wrapper"}>
                                <h2> Edit Employee </h2>
                                {submitSuccess && (
                                    <div className="alert alert-info" role="alert">
                                        Employee details has been edited successfully </div>
                                )}
                                <form id={"create-employee-form"} onSubmit={this.processFormSubmission} noValidate={true}>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="fullName"> Full Name </label>
                                        <input type="text" id="fullName" defaultValue={this.state.employee.fullName} onChange={(e) => this.handleInputChanges(e)} name="fullName" className="form-control" placeholder="Enter employee's Name" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="department"> Department </label>
                                        <input type="text" id="department" defaultValue={this.state.employee.department} onChange={(e) => this.handleInputChanges(e)} name="department" className="form-control" placeholder="Enter employee's Department" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="gender"> Gender </label>
                                        <input type="text" id="gender" defaultValue={this.state.employee.gender} onChange={(e) => this.handleInputChanges(e)} name="gender" className="form-control" placeholder="Enter employee's Gender address" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="age"> Age </label>
                                        <input type="number" id="age" defaultValue={this.state.employee.age} onChange={(e) => this.handleInputChanges(e)} name="age" className="form-control" placeholder="Enter employee's Age" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="phoneNumber"> Address </label>
                                        <input type="number" id="phoneNumber" defaultValue={this.state.employee.phoneNumber} onChange={(e) => this.handleInputChanges(e)} name="phoneNumber" className="form-control" placeholder="Enter employee's Phone Number" />
                                    </div>
                                    <div className="form-group col-md-4 pull-right">
                                        <button className="btn btn-success" type="submit">
                                            Edit employee </button>
                                        {loading &&
                                            <span className="fa fa-circle-o-notch fa-spin" />
                                        }
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}



export default withRouter(EditEmployee)