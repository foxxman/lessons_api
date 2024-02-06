import Joi from 'joi';
import { schemeValidator as httpSchemeValidator } from '../../services/http/schemeValidator';

export const postStudent = httpSchemeValidator(Joi.object({
        name: Joi.string().required(),
}));