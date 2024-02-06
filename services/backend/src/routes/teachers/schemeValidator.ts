import Joi from 'joi';
import { schemeValidator as httpSchemeValidator } from '../../services/http/schemeValidator';

export const postTeacher = httpSchemeValidator(Joi.object({
        body: Joi.object({
                name: Joi.string().required(),
        })
}).unknown(true));