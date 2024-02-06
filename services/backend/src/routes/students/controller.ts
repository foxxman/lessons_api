import { Request, Response } from "express";
import studentService from "../../services/students";
import { sendResponse } from "../../utils/http/send-response";
import httpStatus from "http-status";

export const postStudent = async (req: Request, res: Response) => {
    try {
        const student = await studentService.postStudent(req.body.name)

        sendResponse(res, httpStatus.OK, {
            result: {
                student,
            }
        })
    } catch (error:any) {
        sendResponse(res, httpStatus.BAD_REQUEST, { error })
    }
}