import { ApiProperty } from "@nestjs/swagger";

export class CreateAttendanceDTO {
    @ApiProperty()
    employeeName: string;

    @ApiProperty()
    present: number;

    @ApiProperty()
    sick: number;

    @ApiProperty()
    alpha: number;

    @ApiProperty()
    permissions: number
}