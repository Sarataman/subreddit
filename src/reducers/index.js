import counterReducer from './counter';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    counter: counterReducer
})

export default allReducer;