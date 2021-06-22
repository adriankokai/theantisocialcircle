import { combineReducers } from 'redux';
import authReducer from './auth';
import fetchUserReducer from './fetchUser';

const rootReducer = combineReducers({
    auth: authReducer,
    fetchUser: fetchUserReducer,
})

export default rootReducer;