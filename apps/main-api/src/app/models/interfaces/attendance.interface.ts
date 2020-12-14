import { Document } from 'mongoose'

export interface Attendance extends Document {
    readonly employeeName: string;
    readonly present: number;
    readonly sick: number;
    readonly alpha: number;
    readonly permissions: number
}