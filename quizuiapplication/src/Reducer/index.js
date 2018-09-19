import { combineReducers } from 'redux';
import LoginReducer from './MainReducer';
import UserJobs from './UserJobs';

const rootReducer = combineReducers({
  LoginReducer,
  UserJobs
});
export default rootReducer
