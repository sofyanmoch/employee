import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Req, Res } from '@nestjs/common';
import {EmployeeService} from '../../services/employee/employee.service'
import {CreateEmployeeDTO} from '../../dto/create-employee.dto'
import {ValidateObjectId} from '../../shared/validate-object-id.pipes'

@Controller('employee')
export class EmployeeController {

    constructor(private employeeService: EmployeeService) {}

    @Get('/')
    async getEmployee(@Res() res, @Req() req) {
        const limit = !req.query.limit? '5' : req.query.limit
        const employee = await this.employeeService.getEmployee(limit)
        return res.status(HttpStatus.OK).json(employee)
    }

    @Get('/:employeeID')
    async getEmployees(@Res() res, @Param('employeeID') employeeID: string) {
        const employee = await this.employeeService.getEmployees(employeeID);
        if(!employee) throw new NotFoundException('Employee does not exist')
        return res.status(HttpStatus.OK).json(employee)
    }

    @Post('/add')
    async addEmployee(@Res() res, @Body() createEmployeeDTO:CreateEmployeeDTO) {
        const newEmployee = await this.employeeService.addEmployee(createEmployeeDTO)
        return res.status(HttpStatus.OK).json({
            message: 'Add Employee Succes!',
            employee: newEmployee  
        })
    }

    @Put('/edit/:employeeID')
    async editEmployee(
        @Res() res,
        @Param('employeeID', new ValidateObjectId()) employeeID: string,
        @Body() createEmployeeDTO: CreateEmployeeDTO
    ) {
        const editedEmployee = await this.employeeService.editEmployee(employeeID, createEmployeeDTO);
        if(!editedEmployee) throw new NotFoundException('Employee does not exist')
        return res.status(HttpStatus.OK).json({
            message: 'Edited Employee success',
            employee: editedEmployee
        })
    }

    @Delete('/delete/:employeeID')
    async deleteEmployee(@Res() res, @Param('employeeID') employeeID: string) {
        const deleteEmployee = await this.employeeService.deleteEmployee(employeeID);
        if(!deleteEmployee) throw new NotFoundException('Employee does not exist')
        return res.status(HttpStatus.OK).json({
            message: 'Succes delete employee',
            employee: deleteEmployee
        })
    }
}
