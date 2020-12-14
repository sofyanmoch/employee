import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './module/employee.module';
import {MongooseModule} from '@nestjs/mongoose'
import { AttendanceModule } from './module/attendance.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URL, {useNewUrlParser: true}),
    EmployeeModule,
    AttendanceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
