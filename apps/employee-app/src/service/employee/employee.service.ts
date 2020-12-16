import axios from 'axios'

export default class EmployeeService {

    getAllEmployee(){
       return axios.get('http://localhost:3000/api/employee').then(res => res.data.employee)
}
}