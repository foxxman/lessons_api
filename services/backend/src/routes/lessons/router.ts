import { Router } from "express";
import * as schemeValidator from './schemeValidator'
import * as controller from './controller'
import { withStudents } from "../../middlewares/withStudents";
import { withTeachers } from "../../middlewares/withTeachers";
import { withDates } from "../../middlewares/withDates";
import { withDateRange } from "../../middlewares/withDateRange";
import { withStudentCountRange } from "../../middlewares/withStudentCountRange";
import { withTeacherIdsList } from "../../middlewares/withTeacherIdsList";

const router = Router({ mergeParams: true });

router.post('/',
    schemeValidator.postLessons,
    withDates,
    withStudents,
    withTeachers,
    controller.postLesson,
);

router.get('/',
    schemeValidator.getLessons,
    withDateRange,
    withStudentCountRange,
    withTeacherIdsList,
    controller.getLesson,
);

export const lessonsRouter = router;
