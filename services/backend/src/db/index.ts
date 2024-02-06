import { AppDataSource } from "../config/dataSource";
import { Lesson } from "./models/Lesson";
import { Student } from "./models/Student";
import { Teacher } from "./models/Teacher";

export const teacherRepository = AppDataSource.getRepository(Teacher)
export const studentRepository = AppDataSource.getRepository(Student)
export const lessonRepository = AppDataSource.getRepository(Lesson)