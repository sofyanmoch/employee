import { Module } from '@nestjs/common';
import { EmployeeController } from '../controllers/employee/employee.controller';
import { EmployeeService } from '../services/employee/employee.service';
import {MongooseModule} from '@nestjs/mongoose'
import {EmployeeSchema} from '../schema/employee/employee.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Employee', schema: EmployeeSchema}])
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule {}
