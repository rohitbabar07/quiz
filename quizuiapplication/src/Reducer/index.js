import { combineReducers } from 'redux';
import LoginReducer from './MainReducer';
import UserJobs from './UserJobs';
import Technologies from './Technologies';

const rootReducer = combineReducers({
  LoginReducer,
  UserJobs,
  Technologies
});
export default rootReducer
