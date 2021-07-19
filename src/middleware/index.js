import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from './logger';

// Take note that order matters
export default applyMiddleware(thunk, logger);