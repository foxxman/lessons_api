import { Router } from "express";
import * as schemeValidator from './schemeValidator'
import * as controller from './controller'

const router = Router({ mergeParams: true });

router.post('/',
    schemeValidator.postTeacher,
    controller.postTeacher,
);

export const teachersRouter = router;
