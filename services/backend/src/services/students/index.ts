import { studentRepository } from "../../db";
import { Student } from "../../db/models/Student";

const postStudent = async (name: string) => {

    const studentModel = Object.assign(new Student(), {
        name,
    })
    
    const student = await studentRepository.save(studentModel)
    
    return student
}

const studentService = {
    postStudent,
}

export default studentService;