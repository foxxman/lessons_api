import { Router } from 'express';
import { teachersRouter } from '../../routes/teachers/router';
import { studentsRouter } from '../../routes/students/router';
import { lessonsRouter } from '../../routes/lessons/router';

const router = Router({ mergeParams: true });

router.use('/teachers', teachersRouter);
router.use('/students', studentsRouter);
router.use('/lessons', lessonsRouter);

export default router;