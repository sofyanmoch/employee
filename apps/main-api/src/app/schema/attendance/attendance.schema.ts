import * as mongoose from 'mongoose'

export const AttendanceSchema = new mongoose.Schema({
    employeeName: String,
    present: Number,
    sick: Number,
    alpha: Number,
    permissions: Number
})