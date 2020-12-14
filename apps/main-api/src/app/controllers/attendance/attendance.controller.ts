import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import {AttendanceService} from '../../services/attendance/attendance.service'
import {CreateAttendanceDTO} from '../../dto/create-attendance.dto'
import {ValidateObjectId} from '../../shared/validate-object-id.pipes'

@Controller('attendance')
export class AttendanceController {

    constructor(private attendanceService: AttendanceService) {}

    @Get('/')
    async getAttendance(@Res() res) {
        const attendance = await this.attendanceService.getAttendance()
        return res.status(HttpStatus.OK).json(attendance)
    }

    @Get('/:idAttendance')
    async getAttendances(@Res() res, @Param('idAttendance', new ValidateObjectId()) idAttendance: string) {
        const attendance = await this.attendanceService.getAttendances(idAttendance);
        if(!attendance) throw new NotFoundException('Id Attendance does not exist')
        return res.status(HttpStatus.OK).json(attendance)
    }

    @Post('/add')
    async addAttendance(@Res() res, @Body() createAttendanceDTO:CreateAttendanceDTO) {
        const newAttendance = await this.attendanceService.addAttendance(createAttendanceDTO)
        return res.status(HttpStatus.OK).json({
            message: 'Add Employee Attendance Succes!',
            employee: newAttendance  
        })
    }

    @Put('/edit/:idAttendance')
    async editAttendance(
        @Res() res,
        @Param('idAttendance', new ValidateObjectId()) idAttendance: string,
        @Body() createAttendanceDTO: CreateAttendanceDTO
    ) {
        const editedAttendance = await this.attendanceService.editAttendance(idAttendance, createAttendanceDTO);
        if(!editedAttendance) throw new NotFoundException('Id Attendance does not exist')
        return res.status(HttpStatus.OK).json({
            message: "Succes Edited",
            attendance: editedAttendance
        })
    }


    @Delete('/delete/:idAttendance')
    async deleteAttendance(@Res() res,@Param('idAttendance', new ValidateObjectId()) idAttendance: string) {
        const deleteAttendance = await this.attendanceService.deleteAttendance(idAttendance)
        if(!deleteAttendance) throw new NotFoundException('Id Attendance doesnt exist')
        return res.status(HttpStatus.OK).json({
            message: "Delete Attendance Success",
            attendance: deleteAttendance
        })
    }

}
