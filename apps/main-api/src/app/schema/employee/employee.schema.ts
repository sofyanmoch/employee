import * as mongoose from 'mongoose'

export const EmployeeSchema = new mongoose.Schema({
    fullName: String,
    department: String,
    gender: String,
    age: Number,
    phoneNumber: Number
})