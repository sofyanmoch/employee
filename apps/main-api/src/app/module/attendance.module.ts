import { Module } from '@nestjs/common';
import { AttendanceService } from '../services/attendance/attendance.service';
import { AttendanceController } from '../controllers/attendance/attendance.controller';
import {MongooseModule} from '@nestjs/mongoose'
import {AttendanceSchema} from '../schema/attendance/attendance.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Attendance', schema: AttendanceSchema}])
  ],
  providers: [AttendanceService],
  controllers: [AttendanceController]
})
export class AttendanceModule {}
