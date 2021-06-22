import { combineReducers } from 'redux';
import authReducer from './auth';
import fetchUserReducer from './fetchUser';
import submitApplicationReducer from './submitApplication';

const rootReducer = combineReducers({
    auth: authReducer,
    fetchUser: fetchUserReducer,
    submitApplication: submitApplicationReducer,
})

export default rootReducer;