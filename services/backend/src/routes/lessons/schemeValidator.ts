import Joi from 'joi';
import { schemeValidator as httpSchemeValidator } from '../../services/http/schemeValidator';

const validationConfigs = {
        postLessons: Joi.object({
                body: Joi.object({
                        teacherIds: Joi.array().items(Joi.number()).required(),
                        studentIds: Joi.array().items(Joi.number()).required(),
                        title: Joi.string().required(),
                        days: Joi.array().items(Joi.number()).required(),
                        firstDate: Joi.date().required(),
                        lessonsCount: Joi.number(),
                        lastDate: Joi.date(),
                }).xor('lastDate', 'lessonsCount')
        }).unknown(true),
        
        getLessons: Joi.object({
                query: Joi.object({
                        date: Joi.alternatives().try(Joi.string(), Joi.date()),
                        status: Joi.bool(),
                        studentsCount: Joi.alternatives().try(Joi.string(), Joi.number()),
                        page: Joi.number(),
                        lessonsPerPage: Joi.number(),
                })
        }).unknown(true)
};

export const postLessons = httpSchemeValidator(validationConfigs.postLessons);

export const getLessons = httpSchemeValidator(validationConfigs.getLessons);