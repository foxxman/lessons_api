import { Request, Response } from "express";
import studentService from "../../services/students";

export const postStudent = async (req: Request, res: Response) => {
    await studentService.postStudent(req, res)
}