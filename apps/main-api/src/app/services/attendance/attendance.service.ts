import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose'
import {InjectModel} from '@nestjs/mongoose'
import {Attendance} from '../../interfaces/attendance.interface'
import {CreateAttendanceDTO} from '../../dto/create-attendance.dto'

@Injectable()
export class AttendanceService {

    constructor(@InjectModel('Attendance') private readonly attendanceModel: Model<Attendance>) { }

    async getAttendance(): Promise<Attendance[]> {
        const attendance = await this.attendanceModel.find().exec()
        return attendance;
    }

    async getAttendances(idAttendance): Promise<Attendance>{
        const attendance = await this.attendanceModel.findById(idAttendance).exec()
        return attendance;
    }

    async addAttendance(createAttendanceDTO: CreateAttendanceDTO): Promise<Attendance> {
        const newAttendance = await this.attendanceModel(createAttendanceDTO)
        return newAttendance.save()
    }

    async editAttendance(idAttendance, createAttendanceDTO: CreateAttendanceDTO): Promise<Attendance>{
        const editedAttendance = await this.attendanceModel
                .findByIdAndUpdate(idAttendance, createAttendanceDTO, {new:true});
        return editedAttendance;
    } 

    async deleteAttendance(idAttendance): Promise<any> {
        const deleteAttendance = await this.attendanceModel
                .findByIdAndRemove(idAttendance);
        return deleteAttendance;
    }
}
