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
                this.props.history.push('/')
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
                <div className="">HAI</div>
            </div>
        )
    }
}

export default withRouter(Create)