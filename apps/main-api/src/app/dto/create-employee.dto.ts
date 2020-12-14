import { ApiProperty } from "@nestjs/swagger";

export class CreateEmployeeDTO {

    @ApiProperty()
    fullName: string;

    @ApiProperty()
    department: string;

    @ApiProperty()
    gender: string;

    @ApiProperty()
    age: number;

    @ApiProperty()
    phoneNumber: number
}