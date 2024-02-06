import { Request, Response } from "express";
import teacherService from "../../services/teachers";

export const postTeacher = async (req: Request, res: Response) => {
    await teacherService.postTeacher(req, res)
}