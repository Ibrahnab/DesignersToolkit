import counterReducer from './counter'
import loggedReducer from './isLogged'
import methodReducer from './methodReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    methodReducer: methodReducer
});

export default allReducers