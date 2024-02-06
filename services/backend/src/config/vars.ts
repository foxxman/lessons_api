import dotenv from 'dotenv';
import { parseBoolean } from '../utils/parsers/parseBoolean';
import { parseNumber } from '../utils/parsers/parseNumber';
import { parseString } from '../utils/parsers/parseString';

dotenv.config();

export const vars ={
    env: parseString(process.env.NODE_ENV, 'develop'),
    logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
    isLocal: parseBoolean(process.env.IS_LOCAL, false),
    port: parseNumber(process.env.PORT, 3000),
    dataBase: {
        host: parseString(process.env.DB_HOST, "localhost"),
        port: parseNumber(process.env.DB_PORT, 5432),
        username: parseString(process.env.DB_USERNAME, 'username'),
        password: parseString(process.env.DB_PASSWORD, 'password'),
        database: parseString(process.env.DB_NAME, 'database'),
    }
};
