import { Request } from "express";
import { Teacher } from "../src/db/models/Teacher";
import { Student } from "../src/db/models/Student";

export interface ErrorDetails {
    message: string,
}

export interface CustomRequest<PathParams = {}, ReqBody = {}> 
    extends Request {
        body: ReqBody,
        data?: {
            teachers?: Teacher[],
            students?: Student[],

            studentsCountFrom?: number,
            studentsCountTo?: number,
            studentsCount?: number,

            startDate?: Date,
            endDate?: Date,
            date?: Date,

            teacherIds?: number[],
        },
    }