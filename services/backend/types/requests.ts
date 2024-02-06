
export namespace RequestBody {
    export interface PostLesson {
        teacherIds: number[],
        studentIds: number[],
        title: string,
        days: number[],
        firstDate: Date,
        lessonsCount: number,
        lastDate: Date,
    }
}

export namespace PathParameters {
    export interface GetLessons {
        date?: string | Date,
        status?: boolean,
        studentsCount?: string | number,
        page?: number,
        lessonsPerPage?: number,
    }
}