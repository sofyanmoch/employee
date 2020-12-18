import axios from 'axios'

export default class AttendanceService {

    getAllAttendance(){
        return axios.get('http://localhost:3000/api/attendance').then(res => res.data.attendance)
    }
}