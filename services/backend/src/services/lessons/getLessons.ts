import { lessonRepository } from "../../db";

interface IProps{
    date?: Date,
    startDate?: Date,
    endDate?: Date,
    studentsCount?: number,
    studentsCountFrom?: number,
    studentsCountTo?: number,
    lessonsPerPage?: number,
    page?: number,
    teacherIds?: number[],
    status?: boolean,
}

export const getLessons = ({
    date,
    startDate,
    endDate,
    studentsCount,
    studentsCountFrom,
    studentsCountTo,
    lessonsPerPage,
    page,
    teacherIds,
    status,
}: IProps) => {
    const query = lessonRepository
        .createQueryBuilder('lesson')
        .leftJoinAndSelect('lesson.students', 'lessonStudent');
    
    // const lessons = await lessonRepository
    //     .createQueryBuilder('lesson')
    //     .leftJoinAndSelect('lesson.students', 'lessonStudent')
    //     .where('lesson.date >= :startDate AND lesson.date <= :endDate', { startDate, endDate })
    //     .groupBy('lesson.id')
    //     .having(`COUNT(lessonStudent.studentId) BETWEEN :minStudents AND :maxStudents`, {
    //         minStudents,
    //         maxStudents,
    //     })
    //     .skip(skip)
    //     .take(lessonsPerPage)
    //     .getRawMany();
}