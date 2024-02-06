import "reflect-metadata"
import { DataSource } from "typeorm"
import { Lesson } from "../db/models/Lesson"
import { Student } from "../db/models/Student"
import { Teacher } from "../db/models/Teacher"
import { LessonTeacher } from "../db/models/LessonTeacher"
import { LessonStudent } from "../db/models/LessonStudent"
import { vars } from "./vars"

const {
    host,
    port,
    username,
    password,
    database,
} = vars.dataBase

export const AppDataSource = new DataSource({
    type: "postgres",
    host,
    port,
    username,
    password,
    database,
    synchronize: true,
    logging: true,
    entities: [
        Lesson,
        Student,
        Teacher,
        LessonTeacher,
        LessonStudent,
    ],
})
