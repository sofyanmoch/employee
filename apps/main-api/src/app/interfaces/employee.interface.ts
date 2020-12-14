import { Document } from 'mongoose'

export interface Employee extends Document {
    readonly fullName: string;
    readonly department: string;
    readonly gender: string;
    readonly age: number;
    readonly phoneNumber: number
}