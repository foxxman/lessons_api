import httpStatus from "http-status";
import { Request, Response } from "express";
import { studentRepository } from "../../db";
import { Student } from "../../db/models/Student";
import { sendResponse } from "../../utils/http/send-response";

const postStudent = async (req: Request, res: Response) => {
    const { name } = req.body;

    const studentModel = Object.assign(new Student(), {
        name,
    })
    const student = await studentRepository.save(studentModel)
    
    sendResponse(res, httpStatus.OK, {
        result: {
            student,
        }
    })
}

const studentService = {
    postStudent,
}

export default studentService;