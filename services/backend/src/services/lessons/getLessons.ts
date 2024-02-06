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
    status?: string,
}

export const getLessons = async ({
    date,
    startDate,
    endDate,
    studentsCount,
    studentsCountFrom,
    studentsCountTo,
    lessonsPerPage = 5,
    page = 0,
    teacherIds,
    status,
}: IProps) => {
    
    const skip = lessonsPerPage * page;

    // const result = await lessonRepository
    //     .createQueryBuilder('lesson')
    //     .leftJoinAndSelect('lesson.students', 'lessonStudent')
    //     .skip(skip)
    //     .take(lessonsPerPage)
    //     .getRawMany();
    return [];
}