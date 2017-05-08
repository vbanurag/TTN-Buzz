import thunkMiddleware from 'redux-thunk';
import { logger } from './logger.middleware';

export const middleware = [thunkMiddleware, logger];