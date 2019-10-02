import thunk from 'redux-thunk'
import logger from './logger'
import { appleMiddleware, applyMiddleware } from 'redux'

export default applyMiddleware(
    thunk,
    logger
)