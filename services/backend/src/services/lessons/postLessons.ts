import { yearInMilliseconds } from "../../const";
import { lessonRepository } from "../../db";
import { Lesson } from "../../db/models/Lesson";
import { Student } from "../../db/models/Student";
import { Teacher } from "../../db/models/Teacher";

interface IProps {
    teachers: Teacher[],
    students: Student[],
    title: string,
    days: number[],
    firstDate: Date,
    lessonsCount?: number,
    lastDate?: Date,
}

export const postLessons = async (props: IProps): Promise<number[]> => {
     const {
        teachers,
        students,
        title,
        days: daysForLessons,
        firstDate,
        lessonsCount,
        lastDate,
     } = props

    const date = new Date(firstDate);
    const targetDateRequest = lastDate ? new Date(lastDate) : null;
   
    let targetDate = null;

    if (!targetDateRequest) {
        targetDate = new Date(date.getTime() + yearInMilliseconds);
    } else {
        targetDate = (targetDateRequest.getTime() - date.getTime() < yearInMilliseconds)
            ? targetDateRequest
            : new Date(date.getTime() + yearInMilliseconds)
    }

    const lessonsLimit = lessonsCount && lessonsCount < 300 
        ? lessonsCount 
        : 300;
    
    const lessonsToCreate = [];
    while (
        date.getTime() <= targetDate.getTime() 
        && lessonsToCreate.length < lessonsLimit
    ) {
        const weekDay = date.getDay();
        if(daysForLessons.includes(weekDay)) {
            const lesson = new Lesson();
    
            lesson.title = title;
            lesson.status = true;
            lesson.date = new Date(date.getTime());
            lesson.teachers = teachers;
            lesson.students = students;

            lessonsToCreate.push(lesson);
        }
        date.setDate(date.getDate() + 1);
    }

    const createdLessons = await lessonRepository.save(lessonsToCreate);
    return createdLessons.map((lesson) => lesson.id);    
}