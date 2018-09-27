import { combineReducers } from 'redux';
import LoginReducer from './MainReducer';
import UserJobs from './UserJobs';
import Technologies from './Technologies';
import QuizData from './LowLevelDataReducer';
import MediumQuizData from './MediumLevelDataReducer';
import HighQuizData from './HighLevelDataReducer';

const rootReducer = combineReducers({
  LoginReducer,
  UserJobs,
  Technologies,
  QuizData,
  MediumQuizData,
  HighQuizData
});
export default rootReducer
