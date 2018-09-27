import { combineReducers } from 'redux';
import LoginReducer from './MainReducer';
import UserJobs from './UserJobs';
import Technologies from './Technologies';
import QuizData from './QuizDataReducer';

const rootReducer = combineReducers({
  LoginReducer,
  UserJobs,
  Technologies,
  QuizData
});
export default rootReducer
